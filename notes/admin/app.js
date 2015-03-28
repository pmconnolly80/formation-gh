(function () {
  'use strict';

  angular.module('myApp', [
    'auth'
    ])

    .config(configRoutes)
    .controller('AppCtrl', AppCtrl);

    //

    function configRoutes() {
      // Declare states here with $stateProvider.state().
    }

    function AppCtrl() {
      var vm = this;
    }

})();
