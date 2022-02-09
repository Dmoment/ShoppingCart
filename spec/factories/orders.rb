# frozen_string_literal: true

FactoryBot.define do
  factory :order do
    name { "MyString" }
    email { "MyString" }
    address { "MyText" }
  end
end
