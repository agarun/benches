import React from 'react';
import ReviewShow from './review_show';

const ReviewIndex = ({ bench, benchId }) => (
  <div>
    {
      bench[benchId].reviews.map((review) => (
        <ReviewShow
          review={review}
          key={review.id}
        />
      ))
    }
  </div>
);

export default ReviewIndex;
