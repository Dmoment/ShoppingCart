# frozen_string_literal: true

class AddColumLockingVersionToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :locking_version, :integer, default: 0, null: false
  end
end
