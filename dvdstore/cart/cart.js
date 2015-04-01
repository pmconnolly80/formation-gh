(function () {
  'use strict';

  /**
   * Nom du service: cart
   * Méthodes:
   *   cart.listProducts()
   *   cart.addProduct(product)
   *   cart.removeProduct(productId)
   */

  // SURTOUT PAS !!!!!
  // angular.module('dvdStore')

  angular.module('cart', [])

    .factory('cart', function() {

      var cartData = []; // Contenu du panier

      return {
        listProducts:   listProducts,
        addProduct:     addProduct,
        removeProduct:  removeProduct,
        getNumProducts: getNumProducts,
        getTotalCost:   getTotalCost
      };

      function listProducts() {
        return cartData;
      }

      function addProduct(product) {
        // L'article qu'on ajoute existe-t-il déjà ?
        var pos = getIndexByKeyValue(cartData, 'id', product._id);

        if (pos === -1) {  // L'article n'est PAS dans le panier, ajoute-le !
          cartData.push({
            id: product._id,
            name: product.name,
            price: product.price,
            quantity: 1
          });
        }
        else {  // L'article est DÉJÀ dans le panier; incrémente sa quantité.
          cartData[pos].quantity++;
        }
      }

      function removeProduct(productId) {
        var pos = getIndexByKeyValue(cartData, 'id', productId);
        // Option 1 - Efface le produit situé à la position `pos`
        cartData.splice(pos, 1);
        // Option 2 - Idem (mais déconseillé)
        // delete cartData[pos];
      }

      /**
       * Renvoie l'indice de l'objet dans arr
       * dont la propriété key vaut value.
       */
      function getIndexByKeyValue(arr, key, value) {
        var indexFound = -1;
        angular.forEach(arr, function(obj, index) {
          if (obj[key] == value) {
            indexFound = index;
          }
        });
        return indexFound;
      }

      /**
       * Renvoie le nb d'articles dans le panier.
       */
      function getNumProducts() {
        var numProducts = 0;
        angular.forEach(cartData, function(product) {
          numProducts += product.quantity;
        });
        return numProducts;
      }

      /**
       * Renvoie le coût total des articles.
       */
      function getTotalCost() {
        var total = 0;
        angular.forEach(cartData, function(product) {
          total += product.price * product.quantity;
        });
        return total;
      }


    })

    .directive('cartSummary', ['cart', function(cart) {
      return {
        restrict: 'E',
        templateUrl: 'cart/cartSummary.html',
        controller: function() {
          var vm = this;
          vm.getTotalCost = function() {
            return cart.getTotalCost();
          };
          vm.getNumProducts = function() {
            return cart.getNumProducts();
          }
        },
        controllerAs: 'cartSummaryCtrl'
      };
    }]);


})();

