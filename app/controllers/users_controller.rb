class UsersController < ApplicationController

  before_action :verify_auth, only: [:check_login_status] 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def register
      user = User.create(user_params)
      if user.valid?
          save_user(user.id)
          render json: user,status: :created
      else
          render json: {errors: user.errors}, status: :unprocessable_entity
      end 
  end

  def login 
      sql = "username = :username OR email = :email"
      user = User.where(sql, {username: user_params[:username], email: user_params[:email]}).first
      if user&.authenticate(user_params[:password])
          save_user(user.id)
          token = encode(user.id,user.email)
          render json: {user: user, token: token}
      else
          render json: {errors: "invalid username or password"}, status: :unauthorized
      end
  end

  def delete_account
      user = User.find(params[:id])
      user.destroy 
      head :no_content
  end

  def show
      user = User.find(params[:id])
      render json: user 
  end

  def logout
      remove_user
  end

  def check_login_status 
      render json:{message:"success"}
  end

  def reset_password
      user = User.find_by(email: params[:email])
      if user.present?
          user.update(password: params[:new_password])
          render json: {message: "Password reset successful"}
      else
          render json: {errors: "Email not found"}, status: :not_found
      end
  end

  def forgot_password
      user = User.find_by(email: params[:email])
      if user.present?
          # generate a new password and save it
          new_password = SecureRandom.hex(8)
          user.update(password: new_password)

          # send email to user with new password
          UserMailer.forgot_password(user.email, new_password).deliver_now

          render json: {message: "An email has been sent with instructions to reset your password."}
      else
          render json: {errors: "Email not found"}, status: :not_found
      end
  end

  private 
  
  def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def user_params 
      params.permit(:username,:email,:password)
  end
end
