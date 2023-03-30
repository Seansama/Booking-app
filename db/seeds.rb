# Generate fake hotel data
10.times do
    Hotel.create!(
      name: Faker::Company.name,
      address: Faker::Address.full_address,
      description: Faker::Lorem.paragraph,
      price: rand(50..500),
      rating: rand(1..5),
      image_url: Faker::Placeholdit.image,
     
    )
  end
  
  # Generate fake user data
  20.times do
    User.create!(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      password: Faker::Internet.password,
      is_admin: false
    )
  end
  
  # Generate fake booking data
  30.times do
    Booking.create!(
      user: User.all.sample,
      hotel: Hotel.all.sample,
      check_in: Faker::Date.between(from: 30.days.ago, to: 30.days.from_now),
      check_out: Faker::Date.between(from: 1.day.from_now, to: 60.days.from_now),
      num_guests: rand(1..4),
      total_price: rand(100..2000)
    )
  end
  
  # Generate fake review data
  50.times do
    Review.create!(
      user: User.all.sample,
      hotel: Hotel.all.sample,
      rating: rand(1..5),
      comment: Faker::Lorem.paragraph
    )
  end
  
