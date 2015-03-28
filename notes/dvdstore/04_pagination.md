DVD Store - Ajouter la pagination
=================================

Filtres custom
--------------

Ajouter les deux filtres custom suivants dans `filters/customFilters.js` (attention aux points virgules de fin de ligne quand vous copiez-collez) :

```javascript
.filter("range", function($filter) {
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

.filter("pageCount", function() {
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
})
```

Contrôleur
----------

Adaptez le contrôleur `controllers/productListCtrl.js` de sorte qu'il ressemble à ça :

(j'ai ajouté des commentaires pour signaler les ajouts qui concernent la pagination)

```javascript
angular.module('dvdStore')

  .constant('productListActiveClass', 'btn-primary')

  .constant('productListPageCount', 3)  // <-- Nouveauté Pagination

  .controller('productListCtrl', function(productListActiveClass, productListPageCount) {

    var selectedCategory = null;

    this.selectCategory = function(newCategory) {
      selectedCategory = newCategory;
      this.selectedPage = 1;  // <-- Nouveauté Pagination
    };

    this.getCategoryClass = function(category) {
      return (selectedCategory == category ? productListActiveClass : '');
    };

    this.categoryFilterFn = function(product) {
      return (selectedCategory == null || product.categories.indexOf(selectedCategory) !== -1);
    };

    //
    // Pagination -- Le code ci-dessous est nouveau
    //

    this.selectedPage = 1;
    this.pageSize = productListPageCount;

    this.selectPage = function(newPage) {
      this.selectedPage = newPage;
    };

    this.getPageClass = function(page) {
      return this.selectedPage == page ? productListActiveClass : '';
    };
  });
```

Vue
---

Dans la vue, il faut filtrer la liste des produits par page :

```html
<div class="well" ng-repeat="item in data.products | filter:pl.categoryFilterFn | range:pl.selectedPage:pl.pageSize">
  ...
</div>
```

Et afficher la pagination :

```html
<div class="pull-right btn-group">
  <a ng-repeat="page in data.products | filter:pl.categoryFilterFn | pageCount:pl.pageSize"
    ng-click="pl.selectPage($index + 1)" class="btn btn-default"
    ng-class="pl.getPageClass($index + 1)">
    {{$index + 1}}
  </a>
</div>
```
