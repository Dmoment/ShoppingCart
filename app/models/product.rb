# frozen_string_literal: true

class Product < ApplicationRecord
  has_one_attached :image

  validates :name, presence: true, length: { maximum: 100 }
  validates :price, presence: true
end
