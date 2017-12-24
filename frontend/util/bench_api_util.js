export const fetchBenches = filters => (
  $.ajax({
    method: 'get',
    url: '/api/benches/',
  })
);
