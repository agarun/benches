import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <p>
    <img src={bench.image_url} width="50px" height="50px" />
    <br />
    <strong>Description</strong>:
    <br />
    {bench.description}
    <br />
    Average Rating: {bench.average_rating}
  </p>
);

export default BenchIndexItem;
