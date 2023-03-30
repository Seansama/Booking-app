class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.datetime :check_in
      t.datetime :check_out
      t.timestamps
    end
  end
end
