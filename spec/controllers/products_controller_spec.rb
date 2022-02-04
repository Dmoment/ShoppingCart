require "rails_helper"

RSpec.describe ProductsController, type: :controller do
  context "Checking response of index action of product's controller" do
    let!(:product) { create(:product) }

    it "should get all products" do
      get "index"
      json_response = JSON.parse(response.body)
      expect(json_response.count).to eql(1)
      expect(response).to be_successful
    end
  end
end
