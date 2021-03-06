# frozen_string_literal: true

class MakeProductsColumnNotNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :products, :name, false
    change_column_null :products, :price, false
  end
end
