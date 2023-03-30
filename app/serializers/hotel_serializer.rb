class HotelSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :bookings
  has_many :users, through: :bookings
end
