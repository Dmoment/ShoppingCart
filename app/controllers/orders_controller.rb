# frozen_string_literal: true

class OrdersController < ApplicationController
  def index
    @orders = current_user.orders
    render status: :ok, json: { orders: @orders }
  end

  def show
    @order = Order.includes(cart_items: [:product]).find_by(id: params[:id])
    @products = @order.cart_items.map(&:product)
    if @order
      render status: :ok, json: { order: @order, products: @products }
    else
      render status: :not_found, json: { error: "Order not found" }
    end
  end

  def create
    @order = Order::CreateOrderService.call(order_params, product_params, @current_cart, session[:cart_id], current_user)
    if @order.persisted?
      dissociate_cart
      render status: :ok, json: { notice: "Your order is placed." }
    else
      errors = @order.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors  }
    end
  rescue ActiveRecord::StaleObjectError
    render status: :unprocessable_entity, json: { error: "Product is locked by other customer please place order again"  }
  end

  private
    def order_params
      params.require(:order).permit(:name, :email, :address)
    end

    def product_params
      params.require(:order).permit(products: [:id, :name, :locking_version])
    end

    def dissociate_cart
      @current_cart = nil
      session[:cart_id] = nil
    end
end
