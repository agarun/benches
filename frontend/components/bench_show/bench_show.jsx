import BenchMap from '../bench_map/bench_map';
import React from 'react';
import { Link } from 'react-router-dom';

class BenchShow extends React.Component {
  componentDidMount() {
    this.props.fetchBench(this.props.benchId)
      .then(fetchedBench => {
        this.bench = fetchedBench.bench;
        this.forceUpdate();
      });
  }

  render() {
    const bench = {
      [this.props.benchId]: this.bench
    };

    if (!this.bench) {
      return <div></div>;
    } else {
      return (
        <div>
          <Link to="/">See All Benches</Link>

          <ul>
            <li>Description: {this.bench.description}</li>
            <li>Latitude: {this.bench.lat}</li>
            <li>Longitude: {this.bench.lng}</li>
            <li>Seating Capacity: {this.bench.seating}</li>
          </ul>
          <BenchMap
            benches={bench}
            flagSingleBench={true}
            fetchBench={this.props.fetchBench}
          />
        </div>
      );
    }
  }
}

export default BenchShow;
