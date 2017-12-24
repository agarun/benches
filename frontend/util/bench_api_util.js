export const fetchBenches = data => (
  $.ajax({
    method: 'get',
    url: '/api/benches/',
    data
  })
);

export const fetchBench = benchId => (
  $.ajax({
    method: 'get',
    url: `/api/benches/${benchId}`
  })
);

export const createBench = data => (
  $.ajax({
    method: 'post',
    url: '/api/benches/',
    data
  })
);
