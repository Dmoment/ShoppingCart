# frozen_string_literal: true

require "rails_helper"
include AuthHelper

RSpec.describe OrdersController, type: :controller do
  before(:each) do
     login_user
   end

  context "Checking response of create action of cart_item's controller" do
    let!(:order) { create(:order) }

    it "should create a order" do
      post "create", params: { order: { name: order.name, email: order.email, address: order.address } }
      json_response = JSON.parse(response.body)
      expect(json_response["notice"]).to match("Your order is placed.")
      expect(response).to be_successful
    end
  end

  context "Checking response of index action of order's controller" do
    let!(:order) { create(:order) }

    it "should get current user products" do
      get "index"
      json_response = JSON.parse(response.body)
      expect(json_response.count).to eql(1)
      expect(response).to be_successful
    end
  end

  context "Checking response of show action of order's controller" do
    let!(:order) { create(:order) }

    it "should get current user products" do
      get "show", params: { id: order.id }
      json_response = JSON.parse(response.body)
      expect(json_response.count).to eql(2)
      expect(response).to be_successful
    end
  end
end
