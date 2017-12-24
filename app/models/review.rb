class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :body, :rating, presence: true
  
  belongs_to :bench
end
