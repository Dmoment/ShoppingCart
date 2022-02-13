# frozen_string_literal: true

class AddColumnInStock < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :instock, :integer
  end
end
