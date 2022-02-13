# frozen_string_literal: true

class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :address, :cart_items
end
