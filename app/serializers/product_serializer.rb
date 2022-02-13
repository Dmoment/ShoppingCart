# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :price, :description, :image_url, :is_product_added_to_cart, :is_product_instock

  def image_url
    url_for(object.image.url)
  end

  def is_product_added_to_cart
    current_cart = @instance_options.dig(:current_cart)
    return false unless current_cart.present?
    current_cart.products.include?(object) ? true : false
  end

  def is_product_instock
    object.instock > 0
  end
end
