import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/bench_actions';

const mapDispatchToProps = dispatch => ({
  createReview: bench => dispatch(createReview(bench))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);
