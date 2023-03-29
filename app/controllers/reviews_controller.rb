class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    if reviews
      render json: reviews, status: :ok
    else
      render json: {error: 'Reviews not found'}, status: :not_found
    end
  end

  def create
    review = Review.create(
      title: params[:title],
      review_body: params[:review_body],
    )
    if review.save
      render json: review, status: :created
    else
      render json: {error: review.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    if review
      head :no_content
    else
      render json: {error: 'Could not delete review'}, status: :not_found
    end
  end
end
