angular.module('app')
  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    //
    // Now set up the states
    $stateProvider
      .state('login', {
        abstract: true,
        url: '/login',
        templateUrl: 'partials/wizard/structure.html',
        controller: 'WizardCtrl',
        controllerAs: 'wizard'
      })
      .state('wizard.theme', {
        url: '/theme',
        templateUrl: 'partials/wizard/themes.html',
        controller: 'ThemesCtrl',
        controllerAs: 'showcase'
      })
      .state('wizard.constructor', {
        url: '/constructor',
        templateUrl: 'partials/wizard/constructor.html',
        controller: 'ConstructorCtrl',
        controllerAs: 'constructor'
      })
      .state('wizard.save', {
        url: '/save',
        templateUrl: 'partials/wizard/save.html'
      })
      .state('wizard.link', {
        url: '/link',
        templateUrl: 'partials/wizard/link.html'
      })
  } ])
