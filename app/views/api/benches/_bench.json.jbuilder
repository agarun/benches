json.extract! bench, :id, :description, :lat, :lng, :seating

json.reviews bench.reviews, partial: 'api/reviews/review', as: :review
