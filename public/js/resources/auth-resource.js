angular.module('app.rest')
	.factory('AuthResource', [ '$resource', function($resource) {
		return $resource('/api/login', { query:'@query' });
	} ])