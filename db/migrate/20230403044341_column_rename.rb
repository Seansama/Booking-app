class ColumnRename < ActiveRecord::Migration[7.0]
  def change
    rename_column :hotels, :class, :hotel_class
  end
end
