# frozen_string_literal: true

class Order::CreateOrderService
  attr_accessor :order

  def initialize(order_params, current_cart, cart_id, current_user)
    @order_params = order_params
    @current_cart = current_cart
    @cart_id = cart_id
    @current_user = current_user
  end

  def self.call(*args)
    new(*args).save
  end

  def save
    build_order
    associate_cart_items
    insert_total_price
    insert_user_to_order
    delete_cart if @order.save
    @order
  end

  private
    def build_order
      @order = Order.new(@order_params)
    end

    def associate_cart_items
      @current_cart.cart_items.each do |item|
        @order.cart_items << item
        item.cart_id = nil
      end
    end

    def insert_total_price
      @order.total_price = @current_cart.cart_total
    end

    def insert_user_to_order
      @order.user = @current_user
    end

    def delete_cart
      Cart.find(@cart_id).delete
    end
end
