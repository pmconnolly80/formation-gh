(function () {
  'use strict';

  angular.module('auth')
    .controller('LoginCtrl', LoginCtrl)
    .controller('RegisterCtrl', RegisterCtrl);

  //

  LoginCtrl.$inject = ['AuthService', '$state'];
  function LoginCtrl(AuthService, $state) {
    var currentUser = AuthService.getCurrentUser();
    if (null !== currentUser) {
      return $state.go('home');
    }
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.login = function(credentials) {
      var promise = AuthService.login(credentials);
      // S'il est bien loggé, redirige vers la home.
      promise.then(function() {
        $state.go('home');
      }, function() {
        // Ici, gestion d'erreur
      });
    };
  }

  RegisterCtrl.$inject = ['AuthService', '$state'];
  function RegisterCtrl(AuthService, $state) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.signup = function(credentials) {
      var promise = AuthService.signup(credentials);
      // S'il a bien été créé, redirige vers la home.
      promise.then(function() {
        $state.go('home');
      }, function() {
        // Ici, gestion d'erreur
      });
    }
  }

})();
