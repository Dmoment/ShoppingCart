# frozen_string_literal: true

class AddColumnPriceToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :total_price, :float
    change_column_null :orders, :total_price, false
  end
end
