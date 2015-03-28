'use strict';

(function () {

  angular.module('dvdStore')

    .constant('activeClass', 'btn-primary')

    .constant('productListPageCount', 3)  // <-- Nouveauté Pagination

    .controller('productListCtrl', function($scope, activeClass, productListPageCount, cart) {

      var selectedCategory;

      $scope.selectCategory = function(category) {
        selectedCategory = category;
        $scope.selectedPage = 1;
      };

      /**
       * Renvoie TRUE si on veut garder le produit dans la liste
       *   - Quand la catégorie sélectionnée matche une des catégories
       *     du produit
       *   - OU BIEN si aucune catégorie n'a été sélectionnée.
       *
       * Renvoie FALSE si on veut filtrer de la liste
       *   - Si le produit passé en argument ne matche pas la catégorie
       *     sélectionnée.
       */
      $scope.filterByCategory = function (product) {
        return (angular.isUndefined(selectedCategory)
                || product.categories.indexOf(selectedCategory) !== -1);
      };

      $scope.getSelectedClass = function(category) {
        return category == selectedCategory ? activeClass : '';
      };

      $scope.isActive = function(category) {
        return category == selectedCategory;
      };

      $scope.selectedPage = 1;
      $scope.pageSize = productListPageCount;

      $scope.selectPage = function(newPage) {
        $scope.selectedPage = newPage;
      };

      $scope.getPageClass = function(page) {
        return $scope.selectedPage == page ? activeClass : '';
      };

      $scope.addProductToCart = function(product) {
        cart.addProduct(product);
      };

    });

})();

