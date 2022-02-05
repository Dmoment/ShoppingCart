# frozen_string_literal: true

class Product < ApplicationRecord
  has_one_attached :image
  has_many :cart_items, dependent: :destroy

  validates :name, presence: true, length: { maximum: 100 }
  validates :price, presence: true
end
