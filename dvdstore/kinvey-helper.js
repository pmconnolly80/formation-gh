(function () {
  'use strict';

  angular.module('kinvey.helper', ['kinvey', 'api_keys'])
    .factory('KinveyHelper', ['$kinvey', '$q', 'KINVEY_APP_KEY', 'KINVEY_APP_SECRET',
                      function($kinvey, $q, KINVEY_APP_KEY, KINVEY_APP_SECRET) {

      return {
        isReady: function() {
          var deferred = $q.defer();

          $kinvey.init({
            appKey: KINVEY_APP_KEY,
            appSecret: KINVEY_APP_SECRET
          }).then(function() {
            // Kinvey is initialized.
            var user = $kinvey.getActiveUser();
            var loggedInPromise = (null === user) ? $kinvey.User.login({ username: 'toto', password: 'toto' }) : $q.when(user);
            loggedInPromise.then(function(user) {
              // User is logged in.
              console.log('Kinvey is initialized with user', user);
              deferred.resolve(user);
            }, function(err) {
              // User could not log in.
              deferred.reject(err);
            });
          });

          return deferred.promise;
        }
      };

    }]);

})();
