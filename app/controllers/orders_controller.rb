# frozen_string_literal: true

class OrdersController < ApplicationController
  def index
    @orders = Order.includes(:cart_items)
  end

  def show
    @order = Order.includes(cart_items: [:product]).find(params[:id])
    @products = @order.cart_items.map(&:product)
    if @order
      render status: :ok, json: { order: @order, products: @products }
    else
      render status: :not_found, json: { error: "Order not found" }
    end
  end

  def create
    @order = Order.new(order_params)
    @current_cart.cart_items.each do |item|
      @order.cart_items << item
      item.cart_id = nil
    end
    @order.total_price = @current_cart.cart_total
    if @order.save
      Cart.find(session[:cart_id]).delete
      session[:cart_id] = nil
      render status: :ok, json: { notice: "Your order is placed.", order_id: @order.id }
    else
      errors = @order.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors  }
    end
  end

  private
    def order_params
      params.require(:order).permit(:name, :email, :address)
    end
end
