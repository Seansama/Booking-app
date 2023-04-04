class UserSerializer < ActiveModel::Serializer
  has_many :hotels
  has_many :bookings
  has_many :hotels, through: :bookings
end
