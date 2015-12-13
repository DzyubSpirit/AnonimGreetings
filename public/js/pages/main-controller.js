(function() {
	angular.module('app.main')
		.controller('mainCtrl', mainController)

	function mainController($state) {
		this.state = $state;
	}

	mainController.prototype.login = function() {
		var self = this;

		this.AuthResource.get({ username: this.username, password: this.password })
			.$promise.then(function() {
				self.state.go('main');
			}, function(err) {
				self.username = '';
				self.password = '';
			});
	};
})();