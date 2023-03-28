class Hotel < ApplicationRecord
  belongs_to :user
  validates :name, uniqueness:true, presence: true
  validates :class, presence: true
  validates :description, presence: true, uniqueness: true
  validates :image, presence: true , uniqueness: true
  validates :price, presence: true
  validates :rating, presence: true
end
