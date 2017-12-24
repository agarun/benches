import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createBench } from '../../actions/bench_actions';

const mapDispatchToProps = dispatch => ({
  createBench: bench => dispatch(createBench(bench))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);
