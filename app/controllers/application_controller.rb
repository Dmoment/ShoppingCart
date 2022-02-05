# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include ActiveStorage::SetCurrent
  before_action :set_honeybadger_context
  before_action :current_cart

  private
    def set_honeybadger_context
      Honeybadger.context(
        user_id: current_user&.id,
        user_email: current_user&.email,
        url: request.url
      )
    end

    def current_cart
      if session[:cart_id].present?
        @current_cart = Cart.find_by(id: session[:cart_id])
      else
        @current_cart = Cart.create
        session[:cart_id] = @current_cart.id
      end
    end
end
