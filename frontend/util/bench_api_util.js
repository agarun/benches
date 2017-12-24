export const fetchBenches = data => (
  $.ajax({
    method: 'get',
    url: '/api/benches/',
    data
  })
);

export const createBench = data => (
  $.ajax({
    method: 'post',
    url: '/api/benches/',
    data
  })
);
