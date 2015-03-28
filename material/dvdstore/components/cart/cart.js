'use strict';


angular.module('cart', [])

  .factory('cart', function() {

    var cartData = [];

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

    return {

      addProduct: function(product) {
        var id = product._id.$oid,
            index = getIndexByKeyValue(cartData, 'id', id);

        // Si le produit est déjà dans le panier,
        // incrémente sa quantité.
        if (index != -1) {
          cartData[index].quantity = cartData[index].quantity + 1;
        }
        // Si le produit n'est pas le panier, ajoute-le.
        else {
          cartData.push({
            id: id,
            name: product.name,
            price: product.price,
            quantity: 1,
          });
        }
      },

      removeProduct: function(productId) {
        var index = getIndexByKeyValue(cartData, 'id', productId);
        if (index != -1) {
          cartData.splice(index, 1);
        }
      },

      getProducts: function() {
        return cartData;
      },

      getNbProducts: function() {
        var nbProducts = 0;
        angular.forEach(cartData, function(product) {
          nbProducts = nbProducts + product.quantity;
        });
        return nbProducts;
      },

      getTotal: function() {
        var total = 0;
        angular.forEach(cartData, function(product) {
          total = total + product.price * product.quantity;
        });
        return total;
      },

      clear: function() {
        cartData = [];
      }
    };

  })

  .directive('cartSummary', function() {

    return {
      restrict: 'E',
      templateUrl: 'components/cart/cartSummary.html',
      controller: function($scope, cart) {
        $scope.getNbProducts = cart.getNbProducts;
        $scope.getCartTotal = cart.getTotal;
      }
    };

  });
