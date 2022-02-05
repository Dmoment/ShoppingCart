# frozen_string_literal: true

class CartItemsController < ApplicationController
  def create
    product = Product.find(params[:product_id])
    current_cart = @current_cart

    if current_cart.products.include?(product)
      @cart_item = @current_cart.cart_items.find_by(product_id: product)
    else
      @cart_item = CartItem.new
      @cart_item.cart = current_cart
      @cart_item.product = product
      @cart_item.quantity = 1
    end
    if @cart_item.save
      render json: current_cart.id
    else
      errors = @cart_item.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors  }
    end
  end
end
