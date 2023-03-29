class HotelSerializer < ActiveModel::Serializer
  has_many :reviews
end
