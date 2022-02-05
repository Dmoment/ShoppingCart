# frozen_string_literal: true

class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  def total_price
    self.quantity * self.product.price
  end
end
