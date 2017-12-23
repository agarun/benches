import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches()
      .then();
  }

  render() {
    return (
      Object.keys(this.props.benches).map(bench => (
        <BenchIndexItem
          key={this.props.benches[bench].id}
          bench={this.props.benches[bench]}
        />
      ))
    );
  }
}

export default BenchIndex;
