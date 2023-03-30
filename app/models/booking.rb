class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :hotel
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone_number, presence: true, length: { minimum: 10, maximum: 10 }
  validates :check_in, presence: true , uniqueness: :true
  validates :check_out, presence: :true, uniqueness: :true
end
