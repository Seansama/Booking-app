class UsersController < ApplicationController
    before_action :session_expired?, except: [:forgot_password, :reset_password]

    def register
        user = User.create(user_params)
        if user.valid?
            save_user(user.id)
            app_response(message: 'Registration was successful', status: :created, data: user)
        else
            app_response(message: 'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)
        end
    end

    def login
        sql = "username = :username OR email = :email"
        user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
        if user&.authenticate(user_params[:password])
            save_user(user.id)
            token = encode(user.id, user.email)
            app_response(message: 'Login was successful', status: :ok, data: user)
        else
            app_response(message: 'Invalid username/email or password', status: :unauthorized)
        end
    end

    def logout
        remove_user
        app_response(message: 'Logout successful')
    end

    def forgot_password
        user = User.find_by(email: params[:email])
        if user
            user.generate_password_reset_token
            user.save
            # Send an email to the user with a link to the password reset page
            app_response(message: 'Password reset instructions have been sent to your email', status: :ok)
        else
            app_response(message: 'Invalid email', status: :unprocessable_entity)
        end
    end

    def reset_password
        user = User.find_by(password_reset_token: params[:token])
        if user && user.password_reset_token_valid?
            user.update(password: params[:password])
            user.save
            app_response(message: 'Your password has been reset', status: :ok)
        else
            app_response(message: 'Invalid password reset token', status: :unprocessable_entity)
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end
end
