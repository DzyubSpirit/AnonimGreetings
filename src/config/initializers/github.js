import app from '../app';

app.config(($httpProvider) => {
  // In order not being blocked by github requests rate limitations
  var username = 'Todmy';
  var password = '4Dreamscometrue';

  if (username && password && typeof btoa === 'function') {
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + btoa(username + ':' + password);
  }
});
