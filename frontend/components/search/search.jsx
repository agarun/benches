import React, { Component } from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from '../benches/bench_index';

const Search = ({ benches, fetchBenches, updateFilter }) => (
    <div>
      <BenchIndex
        benches={benches}
      />
      <BenchMap
        benches={benches}
        updateFilter={updateFilter}
      />
    </div>
);

export default Search;
