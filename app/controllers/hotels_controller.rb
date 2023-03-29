class HotelsController < ApplicationController
  before_action :authorize
  def index
    hotels = Hotel.all
    if hotels
      render json: hotels, status: :ok

    else
      render json: {error: 'Hotels not found'}, status: :not_found
    end
  end

  def show
    hotel = Hotel.find_by(name: params[:name])
    if hotel
      render json: hotel, status: :found
    else
      render json: {error: 'Seems this hotel does not exist'}, status: :not_found
    end
  end

  def create
    hotel = Hotel.create(
      name: params[:name],
    rating: params[:rating],
      class: params[:class],
      description: params[:description],
      price: params[:price],
      image: params[:image]
    )
    if hotel.save
      render json: hotel, status: :created
    else
      render json: {error: hotel.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    hotel = Hotel.find_by(id: params[:id])
    hotel.update(
      rating: params[:rating],
      class: params[:class],
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
    hotel = Hotel.find_by(id: params[:id])
    hotel.destroy
    if hotel
      head :no_content
    else
      render json: {error: 'Could not delete hotel'}, status: :not_found
    end
  end

  def authorize
    render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
