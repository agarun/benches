import React from 'react';
import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => ({
  benchId: ownProps.match.params.benchId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBench: benchId => dispatch(fetchBench(benchId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);
