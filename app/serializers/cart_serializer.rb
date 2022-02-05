# frozen_string_literal: true

class CartSerializer < ActiveModel::Serializer
  attributes :id, :cart_total

  has_many :cart_items

  def cart_total
    object.cart_total
  end
end
