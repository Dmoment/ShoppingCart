# frozen_string_literal: true

class CartsController < ApplicationController
  def show
    render json: @current_cart, includes: ["cart_items", "cart_items.product"]
  end

  def destroy
    @current_cart.destroy
    session[:cart_id] = nil
  end
end
