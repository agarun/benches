import Search from './search';
import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  benches: state.entities.benches
});

const mapDispatchToProps = dispatch => ({
  updateBounds: bounds => dispatch(updateBounds(bounds)),
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
