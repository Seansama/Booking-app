# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_30_122337) do
  create_table "bookings", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.datetime "check_in"
    t.datetime "check_out"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.integer "hotel_id", null: false
    t.index ["hotel_id"], name: "index_bookings_on_hotel_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name", null: false
    t.integer "rating", null: false
    t.string "class", null: false
    t.text "description", null: false
    t.integer "price", null: false
    t.text "image", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_hotels_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.text "review_body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "hotel_id", null: false
    t.index ["hotel_id"], name: "index_reviews_on_hotel_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bookings", "hotels"
  add_foreign_key "bookings", "users"
  add_foreign_key "hotels", "users"
  add_foreign_key "reviews", "hotels"
end
