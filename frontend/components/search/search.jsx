import React, { Component } from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from '../benches/bench_index';
import FilterForm from './filter_form';

const Search = ({ benches, fetchBenches, updateFilter, minSeating, maxSeating }) => (
    <div>
      <FilterForm
        updateFilter={updateFilter}
        minSeating={minSeating}
        maxSeating={maxSeating}
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
