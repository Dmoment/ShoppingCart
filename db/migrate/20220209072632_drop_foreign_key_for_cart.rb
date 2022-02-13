# frozen_string_literal: true

class DropForeignKeyForCart < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :cart_items, :carts
  end
end
