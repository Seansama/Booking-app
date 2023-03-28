class CreateHotels < ActiveRecord::Migration[7.0]
  def change
    create_table :hotels do |t|
      t.string :name, null: false
      t.string :rating, null: false
      t.string :class, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.text :image, null: false

      t.timestamps
    end
  end
end
