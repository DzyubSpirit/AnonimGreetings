angular.module('app.auth')
	.factory('AuthResource', [ '$resource', function($resource) {
		return $resource('/login', {});
	} ]);