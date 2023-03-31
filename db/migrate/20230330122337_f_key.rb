class FKey < ActiveRecord::Migration[7.0]
  def change
    add_reference :bookings, :user, foreign_key: true, null: false
    add_reference :bookings, :hotel, foreign_key: true, null: false
    add_reference :reviews, :hotel, foreign_key: true, null: false
  end
end
