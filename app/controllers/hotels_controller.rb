class HotelsController < ApplicationController
  before_action :verify_auth
  before_action
  def index
    hotels = Hotel.all
    if hotels.present?
      render json: hotels, status: :ok

    else
      render json: {error: 'Hotels not found'}, status: :not_found
    end
  end

  def show
    hotel = Hotel.find_by(name: params[:name])
    if hotel
      render json: hotel, status: :ok
    else
      render json: {error: 'Seems this hotel does not exist'}, status: :not_found
    end
  end

  def create
    hotel = Hotel.create(
      name: params[:name],
    rating: params[:rating],
      hotel_class: params[:hotel_class],
      description: params[:description],
      price: params[:price],
      additional: params[:additional],
      image: params[:image],
      lat: params[:lat],
      lng: params[:lng]
    )
    if hotel.save
      render json: hotel, status: :created
    else
      render json: {error: hotel.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    hotel = Hotel.find_by(id: params[:id], user_id: session[:user_id])
    hotel.update(
      rating: params[:rating],
      description: params[:description],
      price: params[:price]
    )
    if hotel.save
      render json: hotel, status: :accepted
    else
      render json: {errors: hotel.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    hotel = Hotel.find_by(id: params[:id], user_id: session[:user_id])
    if hotel.destroy
      head :no_content
    else
      render json: {error: 'Could not delete hotel'}, status: :not_found
    end
  end
  def my_hotels
    hotels = Hotel.where(user_id: session[:user_id])
    if hotels.all
      render json: hotels, status: :ok
    else
      render json: {error: 'No hotels for this user'}, status: :not_found
    end
 end

end
