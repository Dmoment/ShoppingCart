# frozen_string_literal: true

require "rails_helper"
include AuthHelper

RSpec.describe CartItemsController, type: :controller do
  before(:each) do
     login_user
   end

  context "Checking response of create action of cart_item's controller" do
    let!(:product) { create(:product) }

    it "should create a cart item" do
      post "create", params: { product_id: product.id }
      json_response = JSON.parse(response.body)
      expect(json_response["notice"]).to match("Product Added to the cart")
      expect(response).to be_successful
    end
  end

  context "Checking response of increment_quantity action of cart_item's controller" do
    let!(:cart_item) { create(:cart_item, quantity: 1) }

    it "should increment cart item's quantity" do
      put "increment_quantity", params: { id: cart_item.id }
      json_response = JSON.parse(response.body)
      expect(json_response["quantity"]).to eql(2)
      expect(response).to be_successful
    end
  end

  context "Checking response of decrement_quantity action of cart_item's controller" do
    let!(:cart_item) { create(:cart_item, quantity: 2) }

    it "should increment cart item's quantity" do
      put "decrement_quantity", params: { id: cart_item.id }
      json_response = JSON.parse(response.body)
      expect(json_response["quantity"]).to eql(1)
      expect(response).to be_successful
    end
  end

  context "Checking response of destroy action of cart_item's controller" do
    let!(:cart_item) { create(:cart_item) }

    it "should delete cart item" do
      delete "destroy", params: { id: cart_item.id }
      json_response = JSON.parse(response.body)
      expect(json_response["notice"]).to match("Removed product from cart.")
      expect(response).to be_successful
    end
  end
end
