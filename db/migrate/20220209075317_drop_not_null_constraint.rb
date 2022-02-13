# frozen_string_literal: true

class DropNotNullConstraint < ActiveRecord::Migration[6.1]
  def up
    change_column_null :cart_items, :cart_id, true
  end

  def down
    change_column_null :cart_items, :cart_id, false
  end
end
