class AddColumnUserIdToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :user_id, :uuid
    change_column_null :orders, :user_id, false
    add_foreign_key :orders, :users
  end
end
