angular.module('app')
  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    //
    // Now set up the states
    $stateProvider
      .state('login', {
        abstract: true,
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'loginController',
        controllerAs: 'auth'
      })
  } ])
