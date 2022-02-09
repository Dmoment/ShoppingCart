# frozen_string_literal: true

class AddForeignKeyConstraintsToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :cart_items, :carts
    add_foreign_key :cart_items, :products
  end
end
