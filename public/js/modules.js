angular.module('app', [ 'ui.router', 'app.configuration', 'ngMockE2E', 'app.auth', 'app.rest', 'app.main' ]);
angular.module( 'app.configuration', []);
angular.module( 'app.auth', []);
angular.module( 'app.main', []);
angular.module( 'app.rest', [ 'ngResource' ]);
