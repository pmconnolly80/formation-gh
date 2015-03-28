/**
 *
 */
'use strict';

(function () {

  angular.module('dvdStore')

    .constant('productsUrl', 'https://api.mongolab.com/api/1/databases/formation2/collections/products')
    .constant('ordersUrl', 'https://api.mongolab.com/api/1/databases/formation2/collections/orders')
    .constant('apiKey', 'ISXsR31X7VQjheVFt3rAMLTMrr0EXu89')

    .controller('dvdStoreCtrl', function($scope, $http, $location, productsUrl, ordersUrl, apiKey, cart) {

      // Configuration de l'URL
      // Va ajouter ?apiKey= aux URLS
      var urlConfig = {
        params: {apiKey: apiKey}
      };

      $http.get(productsUrl, urlConfig)
        .success(function(data) {
          $scope.products = data;
        })
        .error(function() {
          $scope.error = 'Erreur détectée';
        });

      $scope.submitOrder = function(shipping) {
        // Construit la commande.
        var order = {
          products: cart.getProducts(),
          shipping: shipping
        };
        // Enregistre la commande sur Mongolab.
        $http.post(ordersUrl, order, urlConfig)
          .success(function(data) {
            // Vide le panier.
            cart.clear();
            $location.path('/thankyou');
          })
          .error(function() {
            $scope.error = 'Erreur détectée';
          });
      };

    });

})();
