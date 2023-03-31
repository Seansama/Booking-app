class User < ApplicationRecord
    has_secure_password
    has_many :hotels

    validates :username,{
        length:{ maximum: 9,  minimum: 6 },
        uniqueness:true,
        presence:true
    }

    validates :email,{
        uniqueness:true,
        presence:true
    }
    
    def generate_password_reset_token
    self.password_reset_token = SecureRandom.urlsafe_base64
    self.password_reset_token_sent_at = Time.current
    save!
    password_reset_token
  end

  def password_reset_token_valid?
    (password_reset_token_sent_at + 1.hour) > Time.current
  end
  
end


