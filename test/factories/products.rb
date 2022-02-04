# frozen_string_literal: true

FactoryBot.define do
  factory :product do
    name { "Test Product" }
    price { 1.5 }
    description { "Test product's description" }
    after(:build) do |product|
      product.image.attach(
        io: File.open("app/assets/images/profile_placeholder.png"),
        filename: "test_image"
      )
    end
  end
end
