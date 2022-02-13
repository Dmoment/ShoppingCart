# frozen_string_literal: true

class AddForeignKeyConstraintToCart < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :carts, :users
  end
end
