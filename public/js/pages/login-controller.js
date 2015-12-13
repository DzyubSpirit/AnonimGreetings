(function() {
	angular.module('app.auth')
		.controller('loginCtrl', loginController)

	function loginController(AuthResource, $state) {
		this.AuthResource = AuthResource;
		this.state = $state;
	}

	loginController.prototype.login = function() {
		var self = this;

		this.AuthResource.get({ username: this.username, password: this.password })
			.$promise.then(function() {
				this.state.go('main');
			}, function(err) {
				self.username = '';
				self.password = '';
			});
	};
})();