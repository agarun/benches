import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  render() {
    return (
      Object.keys(this.props.benches).map(bench => (
        <BenchIndexItem
          bench={this.props.benches[bench]}
        />
      ))
    );
  }
}

export default BenchIndex;
