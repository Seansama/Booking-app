class ChangeRatingDataTypeInHotels < ActiveRecord::Migration[7.0]
  def change
    change_column :hotels, :rating, :integer
  end
end
