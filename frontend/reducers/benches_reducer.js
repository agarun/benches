import {
  RECEIVE_BENCHES,
  RECEIVE_BENCH,
  RECEIVE_REVIEW } from '../actions/bench_actions';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      return action.bench;
    case RECEIVE_REVIEW:
      const reviewBenchId = action.review.bench_id;
      const newState = Object.assign({}, state);
      newState.reviews.push(action.review);
      return newState;
    default:
      return state;
  }
};

export default benchesReducer;
