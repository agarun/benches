import React from 'react';

const ReviewIndex = ({ bench }) => (
  <div>
    {
      bench.reviews.map((review) => (
        <ul>
          <li>Rating: {review.rating}</li>
          <li>Body: {review.body}</li>
        </ul>
      ))
    }
  </div>
);

export default ReviewIndex;
