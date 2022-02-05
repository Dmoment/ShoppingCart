# frozen_string_literal: true

FactoryBot.define do
  factory :line_item do
    quantity { 1 }
    product_id { 1 }
    cart_id { 1 }
  end
end
