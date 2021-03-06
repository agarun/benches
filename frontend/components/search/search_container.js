import Search from './search';
import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  benches: state.entities.benches,
  minSeating: state.ui.filters.minSeating,
  maxSeating: state.ui.filters.maxSeating,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
