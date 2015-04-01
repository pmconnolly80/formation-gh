(function () {
  'use strict';

  angular.module('dvdStore')
    .controller('checkoutCtrl', checkoutCtrl);

  checkoutCtrl.$inject = ['cart'];
  function checkoutCtrl(cart) {
    var vm = this;

    vm.products = cart.listProducts();

    vm.getTotalCost = function() {
      return cart.getTotalCost();
    }

    vm.removeProduct = function(productId) {
      cart.removeProduct(productId);
    }
  }

})();
