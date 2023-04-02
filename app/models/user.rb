class User < ApplicationRecord
    has_secure_password
    has_many :hotels
    has_many :bookings
    has_many :hotels, through: :bookings

    validates :username,{
        length:{ maximum: 36,  minimum: 6 },
        uniqueness:true,
        presence:true
    }

    validates :email,{
        uniqueness:true,
        presence:true
    }

end


