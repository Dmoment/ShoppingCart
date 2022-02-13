# frozen_string_literal: true

class CurrentCart::SetCurrentCartService
  attr_accessor :cart_id, :current_cart

  def initialize(cart_id, current_user)
    @cart_id = cart_id
    @current_user = current_user
  end

  def self.call(*args)
    new(*args)
  end

  def set_current_cart
    if @cart_id
      session_cart
    elsif @current_user
      current_user_cart
    else
      destroy_cart
    end
  end

  private
    def session_cart
      @current_cart = Cart.find_by(id: @cart_id)
    end

    def current_user_cart
      @current_cart =  @current_user.cart.present? ? @current_user.cart : Cart.create(user_id: @current_user.id)
      @cart_id = @current_cart.id
    end

    def destroy_cart
      @current_cart = nil
      @cart_id = nil
    end
end
