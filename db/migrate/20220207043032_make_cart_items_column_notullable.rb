class MakeCartItemsColumnNotullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :cart_items, :cart_id, false
    change_column_null :cart_items, :product_id, false
    change_column_null :cart_items, :quantity, false
  end
end
