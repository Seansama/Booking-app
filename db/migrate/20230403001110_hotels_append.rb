class HotelsAppend < ActiveRecord::Migration[7.0]
  def change
    add_column :hotels, :additional, :text
    add_column :hotels, :lat, :float
    add_column :hotels, :lng, :float
  end
end
