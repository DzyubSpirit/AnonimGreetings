angular.module('app')
  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    //
    // Now set up the states
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl',
        controllerAs: 'auth'
      })
  } ])
