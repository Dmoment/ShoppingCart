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
        @current_cart = Cart.find_by(id: session[:cart_id]) # current cart will be fetched from session in already there
      elsif current_user
        if current_user.cart.present? # set current cart from current user's cart if already present
          @current_cart = current_user.cart
          session[:cart_id] = @current_cart.id
        else
          @current_cart = Cart.create(user_id: current_user.id)  # create new cart if both the above case fails
          session[:cart_id] = @current_cart.id
        end
      else
        @current_cart = nil # if not logged_in then make them nil
        session[:cart_id] = nil
      end
    end
end
