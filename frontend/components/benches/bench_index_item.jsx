import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <p>
    <strong>Description</strong>:
    <br />
    {bench.description}
    <br />
    Average Rating: {bench.average_rating}
  </p>
);

export default BenchIndexItem;
