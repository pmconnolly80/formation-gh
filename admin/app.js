(function () {
  'use strict';

  angular.module('myApp', [
    'kinvey',
    'auth',
    'ui.router',
    'api_keys'
    ])

    .config(configRoutes)

    .run(['KinveyService', function(KinveyService) {
      KinveyService.init().then(function() {
        // Kinvey est initialisé
      });
    }])

    .controller('AppCtrl', AppCtrl);

    //

    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configRoutes($stateProvider, $urlRouterProvider) {

      // Declare states here with $stateProvider.state().
      $stateProvider

        /**
         * Etat abstrait dont la seule raison d'être
         * est de contenir une dépendance à l'initialisation de Kinvey.
         */
        .state('admin', {
          abstract: true,
          resolve: {
            kinveyIsInitialized: ['KinveyService', function(KinveyService) {
              return KinveyService.init();
            }]
          },
          template: '<ui-view></ui-view>'
        })

        .state('login', {
          parent: 'admin',
          url: '/login',
          templateUrl: 'auth/loginView.html',
          controller: 'LoginCtrl',
          controllerAs: 'vm'
        })
        .state('register', {
          parent: 'admin',
          url: '/register',
          templateUrl: 'auth/registerView.html',
          controller: 'RegisterCtrl',
          controllerAs: 'vm'
        })
        .state('home', {
          parent: 'admin',
          url: '/home',
          templateUrl: 'common/homeView.html',
          controller: ['AuthService', '$state', function(AuthService, $state) {
            var currentUser = AuthService.getCurrentUser();
            if (null === currentUser) {
              return $state.go('login');
            }
          }]
        })
        ;
      $urlRouterProvider.otherwise('/home');
    }

    AppCtrl.$inject = ['AuthService', '$timeout', 'KinveyService', '$location'];
    function AppCtrl(AuthService, $timeout, KinveyService, $location) {
      var vm = this;

      KinveyService.init().then(function() {
        vm.currentUser = AuthService.getCurrentUser();
      })

      vm.logout = function() {
        AuthService.logout().then(function() {
          // Succès.... Ne marche pas...
        }, function() {
          console.log('cb error');
          // $state.go('login');
          $location.path('/login');
        });
      }
    }


})();
