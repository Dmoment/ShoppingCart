# frozen_string_literal: true

class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :cart_id, :selected_product, :total_price

  belongs_to :cart

  def selected_product
    {
      name: object.product.name,
      price: object.product.price,
      image_url: object.product.image.url
    }
  end

  def total_price
    object.total_price
  end
end
