(function () {
  'use strict';

  angular.module('auth')

    .factory('AuthService', AuthService)
    .factory('KinveyService', KinveyService);


    AuthService.$inject = ['$kinvey'];
    function AuthService($kinvey) {
      return {
        signup: signup,
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
      };

      function signup(credentials) {
        var promise = $kinvey.User.signup(credentials);
        return promise;
      }

      function login(credentials) {
        var promise = $kinvey.User.login(credentials);
        return promise;
      }

      function logout() {
        var user = getCurrentUser();
        if (null !== user) {
          var promise = $kinvey.User.logout();
        }
        else {
          var promise = $q.when('User is already logged out');
        }
        return promise;
      }

      function getCurrentUser() {
        return $kinvey.getActiveUser();
      }
    }


    KinveyService.$inject = ['$kinvey', 'KINVEY_APP_KEY', 'KINVEY_APP_SECRET'];
    function KinveyService($kinvey, KINVEY_APP_KEY, KINVEY_APP_SECRET) {
      var promise = $kinvey.init({
        appKey    : KINVEY_APP_KEY,
        appSecret : KINVEY_APP_SECRET
      });
      return {
        init: function() {
          return promise;
        }
      }
    }

})();
