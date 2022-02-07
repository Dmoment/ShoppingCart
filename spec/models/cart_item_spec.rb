# frozen_string_literal: true

require "rails_helper"

RSpec.describe CartItem, type: :model do
  context "Testing Product's details" do
    let!(:cart_item) { create(:cart_item) }

    it "should match with following results" do
      expect(cart_item).to be_valid
      expect(cart_item.quantity).to eql(1)
      expect(cart_item.total_price).to eql(1.5)
    end
  end

  context "Testing Associations of cart item model" do
    it "should have belong_to relationship with products and cart" do
      t = CartItem.reflect_on_association(:cart)
      expect(t.macro).to eq(:belongs_to)
      t = CartItem.reflect_on_association(:product)
      expect(t.macro).to eq(:belongs_to)
    end
  end

  context "Negative test case- When cart_items attributes are upadted to nill" do
    let!(:cart_item) { create(:cart_item) }

    it "should raise an error" do
      expect do
        cart_item.update!(quantity: "")
      end.to raise_error("Validation failed: Quantity can't be blank")
    end

    it "should raise an error" do
      expect do
        cart_item.update!(cart_id: "")
      end.to raise_error("Validation failed: Cart must exist, Cart can't be blank")
    end
  end
end
