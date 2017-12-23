import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <p>
    <strong>Description</strong>:
    <br />
    {bench.description}
  </p>
);

export default BenchIndexItem;
