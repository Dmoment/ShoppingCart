# frozen_string_literal: true

class Product < ApplicationRecord
  has_one_attached :image
  has_many :cart_items, dependent: :destroy
  attr_accessor :original_locking_version


  validates :name, presence: true, length: { maximum: 100 }
  validates :price, presence: true
  validate :optimistic_locking_for_instock, on: :update
  before_update :increment_locking_version

  def increment_locking_version
    self.locking_version += 1
  end

  def optimistic_locking_for_instock
    if self.original_locking_version <  self.locking_version
      self.original_locking_version = nil
      errors.add :base,  "This product is currently being locked, Please refresh"
    end
  end


  # def original_updated_at
  #   self.original_updated_at || self.updated_at.to_f
  # end

  # def handle_conflict
  #   if self.original_updated_at
  #   binding.pry
  # end
end
