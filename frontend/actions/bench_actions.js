import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = filters => dispatch => (
  BenchAPIUtil
    .fetchBenches(filters)
    .then(benches => (
      dispatch(receiveBenches(benches))
    ), error => (
      console.log(error)
    ))
);

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const createBench = bench => dispatch => (
  BenchAPIUtil
    .createBench(bench)
    .then(newBench => (
      dispatch(receiveBench(newBench))
    ), error => (
      console.log(error)
    ))
);

export const fetchBench = benchId => dispatch => (
  BenchAPIUtil
    .fetchBench(benchId)
    .then(fetchedBench => (
      dispatch(receiveBench(fetchedBench))
    ), error => (
      console.log(error)
    ))
);

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const createReview = review => dispatch => (
  BenchAPIUtil
    .createReview(review)
    .then(fetchedReview => (
      dispatch(receiveReview(fetchedReview))
    ))
);
