(function () {
  'use strict';

  angular.module('dvdStore')
    .constant('btnActiveClass', 'btn-primary')
    .controller('productListCtrl', productListCtrl);

  productListCtrl.$inject = ['btnActiveClass'];
  function productListCtrl(btnActiveClass) {
    var vm = this;
    var selectedCategory = '';

    vm.selectCategory = function(category) {
      selectedCategory = category;
    }

    vm.isSelectedCategory = function(category) {
      return (category == selectedCategory) ? btnActiveClass : '';
    }

    /**
     * -- Fonction de filtrage -- PAS UN CUSTOM FILTER --
     * Renvoie TRUE si le produit passé en argument
     * appartient à la catégorie sélectionné.
     */
    vm.isProductInCategory = function(product) {
      if (selectedCategory) {
        return (product.categories.indexOf(selectedCategory) !== -1);
      }
      else {
        return true;
      }
    }

  }

})();
