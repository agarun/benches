import BenchIndex from '../benches/bench_index';
import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';

const mapStateToProps = state => ({
  benches: state.entities.benches
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
