# frozen_string_literal: true

require "rails_helper"


RSpec.describe Order, type: :model do
  context "Testing Order's details" do
    let!(:order) { create(:order,
      name: "Mike Ross",
      email: "abc@example.com",
      address: "282 Kevin Brook",
      total_price: 10) }

    it "should match with following results" do
      expect(order).to be_valid
      expect(order.name).to eql("Mike Ross")
      expect(order.email).to eql("abc@example.com")
    end
  end

  context "Testing Associations of order model" do
    let!(:order) { create(:order) }
    it "should have belong_to relationship with user and has_many with cart_items" do
      t = Order.reflect_on_association(:cart_items)
      expect(t.macro).to eq(:has_many)
      t = Order.reflect_on_association(:user)
      expect(t.macro).to eq(:belongs_to)
    end
  end

  context "Negative test case- When order attributes are upadted to nill" do
    let!(:order) { create(:order) }

    it "should raise an error" do
      expect do
        order.update!(total_price: "")
      end.to raise_error("Validation failed: Total price can't be blank")
    end

    it "should raise an error" do
      expect do
        order.update!(user_id: "")
      end.to raise_error("Validation failed: User can't be blank, User must exist")
    end
  end
end
