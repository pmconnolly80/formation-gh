'use strict';


angular.module('dvdStore')
  .controller('checkoutCtrl', function($scope, cart) {
    // Expose les données qui viennent du service à la vue
    this.products = cart.getProducts();

    this.removeProduct = cart.removeProduct;
    this.getTotal = cart.getTotal;
  });
