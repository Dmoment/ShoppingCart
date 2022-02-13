# frozen_string_literal: true

class Order < ApplicationRecord
  VALID_EMAIL_REGEX = /\A^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$\z/

  validates :name, presence: true, length: { maximum: 100 }
  validates_presence_of :total_price, :address, :user_id
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
  validate :handle_conflict

  attr_accessor :is_product_locked, :insufficient_product_instock

  has_many :cart_items, dependent: :destroy
  belongs_to :user

  before_save :normalize_email

  def normalize_email
    self.email.downcase!
  end

  def handle_conflict
    if self.is_product_locked
      errors.add :base, "This product is currently being locked, Please refresh"
    elsif self.insufficient_product_instock
      errors.add :base, "Insufficient products right now in stock"
    end
  end
end
