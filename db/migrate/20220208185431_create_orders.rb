# frozen_string_literal: true

class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.text :address, null: false

      t.timestamps
    end
  end
end
