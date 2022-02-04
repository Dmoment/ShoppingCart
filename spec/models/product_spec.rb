require "rails_helper"

RSpec.describe Product, type: :model do
  context "Testing Product's details" do
    let!(:product) { create(:product) }

    it "should match with following results" do
      expect(product.name).to match("Test Product")
      expect(product.price).to match(1.5)
      expect(product.description).to match("Test product's description")
      expect(product.image.attached?).to match(true)
    end
  end

  context "Negative test case- When product's name and price are null" do
    let!(:product) { create(:product) }

    it "should raise an error" do
      expect do
        product.update!(name: "", price: "")
      end.to raise_error("Validation failed: Name can't be blank, Price can't be blank")
    end
  end
end
