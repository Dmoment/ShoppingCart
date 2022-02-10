# frozen_string_literal: true

FactoryBot.define do
  factory :order do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    address { Faker::Address.street_address }
    total_price { 10 }
    user
    after(:build) do |order|
      order.cart_items { Factory(:cart_item) }
    end
  end
end
