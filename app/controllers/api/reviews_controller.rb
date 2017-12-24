class Api::ReviewsController < ApplicationController
  def create

  end

  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
