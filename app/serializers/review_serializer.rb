class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :review_body, :hotel_id

end
