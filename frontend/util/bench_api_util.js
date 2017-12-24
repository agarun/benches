export const fetchBenches = data => (
  $.ajax({
    method: 'get',
    url: '/api/benches/',
    data
  })
);
