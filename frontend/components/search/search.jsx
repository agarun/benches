import React, { Component } from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from '../benches/bench_index';

const Search = ({ benches, fetchBenches }) => (
    <div>
      <BenchMap />
      <BenchIndex
        benches={benches}
        fetchBenches={fetchBenches}
      />
    </div>
);

export default Search;
