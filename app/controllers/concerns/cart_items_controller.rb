# frozen_string_literal: true

class CartItemsController < ApplicationController
  before_action :load_cart_item, except: :create

  def create
    product = Product.find(params[:product_id])
    current_cart = @current_cart

    @cart_item = CartItem.new
    @cart_item.cart = current_cart
    @cart_item.product = product

    if @cart_item.save
      render status: :ok, json: { notice: "Product Added to the cart", cart_id: current_cart.id }
    else
      errors = @cart_item.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors  }
    end
  end

  def increment_quantity
    @cart_item.quantity += 1
    if @cart_item.save
      render status: :ok, json: { quantity: @cart_item.quantity }
    else
      render status: :unprocessable_entity,
        json: { error: @cart_item.errors.full_messages.to_sentence }
    end
  end

  def decrement_quantity
    @cart_item.quantity -= 1 if @cart_item.quantity > 1
    if @cart_item.save
      render status: :ok, json: { quantity: @cart_item.quantity }
    else
      render status: :unprocessable_entity,
        json: { error: @cart_item.errors.full_messages.to_sentence }
    end
  end


  def destroy
    if @cart_item.destroy
      render status: :ok, json: { notice: "Removed product from cart." }
    else
      render status: :unprocessable_entity,
        json: { error: @cart_item.errors.full_messages.to_sentence }
    end
  end

  private
    def load_cart_item
      @cart_item = CartItem.find(params[:id])
    end
end
