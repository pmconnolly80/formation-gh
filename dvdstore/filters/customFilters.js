(function () {
  'use strict';

  angular.module('customFilters', [])
    .filter('unique', function() {
      return function(input, propertyName){
            if(angular.isArray(input))
            {
              var categories = [];
                angular.forEach(input, function(product){
                  if(angular.isDefined(product[propertyName]))
                  {
                    angular.forEach(product[propertyName], function(category){
                        if (categories.indexOf(category) === -1) {
                          categories.push(category);
                        }
                    });
                  }
                });
              return categories;
            }
          else
            {
              return input;
            }
      }
    });

})();
