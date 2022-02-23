# frozen_string_literal: true

class Product < ApplicationRecord
  has_one_attached :image
  has_many :cart_items, dependent: :destroy
  attr_accessor :original_locking_version


  validates :name, presence: true, length: { maximum: 100 }
  validates :price, presence: true
  validate :optimistic_locking_for_instock, on: :update
  before_update :increment_locking_version

private
  def increment_locking_version
    self.locking_version += 1
  end

  def optimistic_locking_for_instock
    if self.original_locking_version <  self.locking_version
      self.original_locking_version = nil
      raise ActiveRecord::StaleObjectError
    end
  end
end
