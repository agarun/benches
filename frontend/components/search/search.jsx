import React, { Component } from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from '../benches/bench_index';
import FilterForm from './filter_form';

const Search = ({ benches, fetchBenches, updateFilter }) => (
    <div>
      <FilterForm
        updateFilter={updateFilter}
      />
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
