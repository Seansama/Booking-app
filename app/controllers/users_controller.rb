class UsersController < ApplicationController
  def register
    user = User.create(
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )
    if user.save
      render json: user, status: :created
    else
      render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    end
  end



end
