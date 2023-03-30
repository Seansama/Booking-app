class BookingsController < ApplicationController
  #before_action :authorize

  def index
    bookings = user.Booking.all
    if bookings
      render json: bookings, status: :ok
    else
      render json: {error: 'Bookings not available.'}, status: :not_found
    end
  end

  def show
    booking = user.Booking.find_by(id: params[:id])
    if booking
      render json: booking, status: :found
    else
      render json: {error: 'Booking does not seem to exist'}, status: :not_found
    end
  end
end
