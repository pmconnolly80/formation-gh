/**
 * @file
 * Main app
 */
(function () {
  'use strict';

  angular.module('dvdStore', [
    'customFilters',
    'kinvey.helper',
    'cart',
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'views/productList.html'
      })
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html',
        // JE SUIS ICI
        controller: 'checkoutCtrl',
        controllerAs: 'checkoutCtrl'
      })
      .when('/placeorder', {
        templateUrl: 'views/placerOrder.html'
      })
      .when('/thankyou', {
        templateUrl: 'views/thankYou.html'
      })
      .otherwise({
        redirectTo: '/products'
      })
      ;
  }]);

})();
