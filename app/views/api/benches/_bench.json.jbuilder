json.extract! bench, :id, :description, :lat, :lng, :seating, :average_rating, :image_url

json.reviews bench.reviews, partial: 'api/reviews/review', as: :review
