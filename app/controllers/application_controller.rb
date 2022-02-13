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
      @cart = CurrentCart::SetCurrentCartService.call(session[:cart_id], current_user)
      @cart.set_current_cart
      @current_cart = @cart.current_cart
      session[:cart_id] = @cart.cart_id
    end
end
