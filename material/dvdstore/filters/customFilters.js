'use strict';

(function () {

  angular.module('customFilters', [])

    .filter('unique', function() {
      return function(data, propertyName) {
        // Si les datas sont bien sous forme de tableau...
        if (angular.isArray(data)) {
          var categories = [];
          // Boucle sur les datas (c. à d. les produits)
          angular.forEach(data, function(product) {
            // Boucle sur les catégories d'un produit
            angular.forEach(product[propertyName], function(category) {
              // Ici, j'ai chaque catégorie une par une.
              // Si la catégorie n'a PAS déjà été ajoutée, alors on l'ajoute.
              if (categories.indexOf(category) === -1) {
                categories.push(category);
              }
            });
          });
          return categories;
        }
        else {
          return data;
        }
      };
    })

    .filter('range', function($filter) {
      return function(data, page, size) {
        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
          var start_index = (page - 1) * size;
          if (data.length < start_index) {
            return [];
          } else {
            return $filter("limitTo")(data.splice(start_index), size);
          }
        } else {
          return data;
        }
      }
    })

    .filter('pageCount', function() {
      return function(data, size) {
        if (angular.isArray(data)) {
          var result = [];
          for (var i = 0; i < Math.ceil(data.length / size); i++) {
            result.push(i);
          }
          return result;
        } else {
          return data;
        }
      }
    });

})();
