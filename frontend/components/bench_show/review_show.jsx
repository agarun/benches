import React from 'react';

const ReviewShow = ({ review }) => (
  <div>
    <ul>
      <li>Rating: {review.rating}</li>
      <li>Body: {review.body}</li>
    </ul>
  </div>
);

export default ReviewShow;
