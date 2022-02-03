# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :price, :description, :image_url

  def image_url
    url_for(object.image.url)
  end
end
