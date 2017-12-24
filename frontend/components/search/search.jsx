import React, { Component } from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from '../benches/bench_index';

const Search = ({ benches, fetchBenches, updateBounds }) => (
    <div>
      <BenchIndex
        benches={benches}
        fetchBenches={fetchBenches}
      />
      <BenchMap
        benches={benches}
        updateBounds={updateBounds}
      />
    </div>
);

export default Search;
