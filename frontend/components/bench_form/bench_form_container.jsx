import React from 'react';
import { connect } from 'react-redux';
import BenchForm from './bench_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng'),
});

// const mapDispatchToProps = () => {
// };

export default connect(
  mapStateToProps
)(BenchForm);
