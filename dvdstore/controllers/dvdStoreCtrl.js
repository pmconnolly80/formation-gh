(function () {
  'use strict';

  angular.module('dvdStore')
    .controller('dvdStoreCtrl', dvdStoreCtrl);

  dvdStoreCtrl.$inject = ['$kinvey', 'KinveyHelper'];
  function dvdStoreCtrl($kinvey, KinveyHelper) {
    var vm = this;

    KinveyHelper.isReady().then(function() {
      $kinvey.DataStore.find('products').then(function(data) {
        vm.products = data;
      });
    });

    // $http.get('products.json')
    //   .success(function(data) {
    //     vm.products = data;
    //   });
  }

})();
