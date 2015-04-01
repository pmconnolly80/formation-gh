(function () {
  'use strict';

  angular.module('dvdStore')
    .controller('dvdStoreCtrl', dvdStoreCtrl);

  dvdStoreCtrl.$inject = ['$kinvey', 'KinveyHelper', 'cart', '$location'];
  function dvdStoreCtrl($kinvey, KinveyHelper, cart, $location) {
    var vm = this;

    KinveyHelper.isReady().then(function() {
      $kinvey.DataStore.find('products').then(function(data) {
        vm.products = data;
      });
    });

    vm.placeOrder = function(shippingInfo) {
      var products = cart.listProducts();
      var order = {
        shippingInfo: shippingInfo,
        products: products
      };
      var promise = $kinvey.DataStore.save('orders', order);
      promise.then(function() {
        $location.path('/thankyou');
      });
    }

    // $http.get('products.json')
    //   .success(function(data) {
    //     vm.products = data;
    //   });
  }

})();
