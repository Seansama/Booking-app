class RemoveUserIdFromHotels < ActiveRecord::Migration[7.0]
  def change
    remove_column :hotels, :user_id, :integer
  end
end
