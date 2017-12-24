import React from 'react';
import ReviewFormContainer from './review_form_container';
import ReviewIndex from './review_index';

const BenchReview = ({ bench, benchId }) => (
  <div>
    <ReviewIndex
      bench={bench}
      key={benchId}
      benchId={benchId}
    />
    {/* TODO: Why doesn't `ReviewFormContainer` re-render
    when bench.reviews is updated? */}
    <ReviewFormContainer
      benchId={benchId}
    />
  </div>
);

export default BenchReview;
