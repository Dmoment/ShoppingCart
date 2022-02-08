# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :price, :description, :image_url, :is_product_added_to_cart

  def image_url
    url_for(object.image.url)
  end

  def is_product_added_to_cart
    object.cart_items.present? ? true : false
  end
end