class User < ApplicationRecord
    has_secure_password
    has_many :hotels

    validates :username,{
        length:{ maximum: 6,  minimum: 9 },
        uniqueness:true,
        presence:true
    }

    validates :email,{
        uniqueness:true,
        presence:true
    }

end
