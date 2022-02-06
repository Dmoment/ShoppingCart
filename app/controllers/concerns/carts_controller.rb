# frozen_string_literal: true

class CartsController < ApplicationController
  def show
    render json: @current_cart, includes: ["cart_items"]
  end

  def destroy
    if @current_cart.destroy
      session[:cart_id] = nil
      render status: :ok, json: { notice: "Successfully deleted cart." }
    else
      render status: :unprocessable_entity,
        json: { error: @current_cart.errors.full_messages.to_sentence }
    end
  end
end
