angular.module('app', [ 'ui.router', 'app.configuration', 'ngMockE2E', 'app.auth', 'app.rest' ]);
angular.module( 'app.configuration', []);
angular.module( 'app.auth', []);
angular.module( 'app.rest', [ 'ngResource' ]);
