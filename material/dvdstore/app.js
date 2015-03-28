/**
 *
 */
'use strict';

(function () {

  angular.module('dvdStore', ['customFilters', 'cart', 'ngRoute'])

    .config(function($routeProvider) {

      $routeProvider
        .when('/products', {
          templateUrl: 'views/productList.html',
        })
        .when('/checkout', {
          templateUrl: 'views/checkoutSummary.html',
          controller: 'checkoutCtrl',
          controllerAs: 'checkoutCtrl',
        })
        .when('/placeorder', {
          templateUrl: 'views/placeOrder.html'
        })
        .when('/thankyou', {
          templateUrl: 'views/thankYou.html'
        })
        .otherwise({
          redirectTo: '/products'
        });
    });

})();
