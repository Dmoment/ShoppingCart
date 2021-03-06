# frozen_string_literal: true

class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product
  belongs_to :order, optional: true

  after_initialize :set_quantity, unless: :persisted?
  validates_presence_of :quantity, :product_id

  def set_quantity
    self.quantity ||= 1
  end

  def total_price
    self.quantity * self.product.price
  end
end
