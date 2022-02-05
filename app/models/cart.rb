# frozen_string_literal: true

class Cart < ApplicationRecord
  has_many :cart_items, dependent: :destroy
  has_many :products, through: :cart_items


  def cart_total
    self.cart_items.map(&:total_price).sum || 0
  end
end
