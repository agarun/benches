export const fetchBenches = () => (
  $.ajax({
    method: 'get',
    url: '/api/benches/'
  })
);
