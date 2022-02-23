# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    # To avoid N+1 queries
    @products = Product.includes(:cart_items).all.with_attached_image
    render json: @products, current_cart: @current_cart
  end

  def current_cart_products
    @products = @current_cart.products
    render status: :ok, json: @products
  end
end
