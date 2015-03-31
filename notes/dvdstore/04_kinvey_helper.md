Kinvey Helper
=============

**Qu'est-ce que c'est ?** Kinvey prend un peu de temps à installer. Nous verrons sa mise en oeuvre en détail lors de la création du backoffice, mais pour le DVD Store, le Kinvey Helper permet de se focaliser sur les tâches importantes sans perdre de temps sur Kinvey.


Installer le Kinvey Helper
--------------------------

1) Dans la console Kinvey, créer un utilisateur avec le username `toto` et le pwd `toto`. (MAUVAISE PRATIQUE, mais sans utilisateur loggé, impossible d'accéder au data store).

2) Charger les scripts adéquats **après AngularJS** (attention aux chemins !) :

```html
<script src="//da189i1jfloii.cloudfront.net/js/kinvey-angular-1.2.0.min.js"></script>
<script src="kinvey-helper.js"></script>
<script src="../api_keys.js"></script>
```

2) Déclarer le module `kinvey.helper` comme dépendance de 'application `dvdStore`.


Utiliser le Kinvey Helper
-------------------------

Tout code qui a besoin d'utiliser le SDK Kinvey (`$kinvey`) doit :

- Injecter `$kinvey` et `KinveyHelper`.
- Se greffer à la promesse renvoyée par `KinveyHelper.isReady()`

Par exemple, pour faire une requête au data store dans un contrôleur :

```js
dvdStoreCtrl.$inject = ['$kinvey', 'KinveyHelper'];
function dvdStoreCtrl($kinvey, KinveyHelper) {
  var vm = this;

  KinveyHelper.isReady().then(function(currentUser) {
    $kinvey.DataStore.find('products').then(function(data) {
      vm.products = data;
    });
  });
}
```


Code source de `kinvey-helper.js`
---------------------------------

```js
(function () {
  'use strict';

  angular.module('kinvey.helper', ['kinvey', 'api_keys'])
    .factory('KinveyHelper', ['$kinvey', '$q', 'KINVEY_APP_KEY', 'KINVEY_APP_SECRET',
                      function($kinvey, $q, KINVEY_APP_KEY, KINVEY_APP_SECRET) {

      return {
        isReady: function() {
          var deferred = $q.defer();

          $kinvey.init({
            appKey: KINVEY_APP_KEY,
            appSecret: KINVEY_APP_SECRET
          }).then(function() {
            // Kinvey is initialized.
            var user = $kinvey.getActiveUser();
            var loggedInPromise = (null === user) ? $kinvey.User.login({ username: 'toto', password: 'toto' }) : $q.when(user);
            loggedInPromise.then(function(user) {
              // User is logged in.
              deferred.resolve(user);
            }, function(err) {
              // User could not log in.
              deferred.reject(err);
            });
          });

          return deferred.promise;
        }
      };

    }]);

})();
```
