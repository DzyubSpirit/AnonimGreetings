(function() {
	angular.module('app.auth')
		.controller('loginCtrl', loginController)

	function loginController(AuthResource) {
		this.AuthResource = AuthResource;
	}

	loginController.prototype.login = function() {
		this.AuthResource.get();
	};
})();