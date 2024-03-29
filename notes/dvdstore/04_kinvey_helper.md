Kinvey Helper
=============

**Qu'est-ce que c'est ?** Kinvey prend un peu de temps à installer. Nous verrons sa mise en oeuvre en détail lors de la création du backoffice, mais pour le DVD Store, le Kinvey Helper permet de se focaliser sur les tâches importantes, sans perdre de temps sur Kinvey.


Installer le Kinvey Helper
--------------------------

1) Dans la console Kinvey, créer un utilisateur avec le username `toto` et le pwd `toto`. (ATTENTION MAUVAISE PRATIQUE !! Mais sans utilisateur loggé, impossible d'accéder au data store).

2) Charger les scripts adéquats **après AngularJS** (attention aux chemins !) :

```html
<script src="//da189i1jfloii.cloudfront.net/js/kinvey-angular-1.3.5.min.js"></script>
<script src="kinvey-helper.js"></script>
<script src="../api_keys.js"></script>
```

3) Déclarer le module `kinvey.helper` comme dépendance de l'application `dvdStore`.


Utiliser le Kinvey Helper
-------------------------

Tout code de l'application `dvdStore` qui a besoin d'utiliser le SDK Kinvey (`$kinvey`) doit maintenant :

- Injecter les dépendances `$kinvey` et `KinveyHelper`.
- Dépendre de la promesse renvoyée par `KinveyHelper.isReady()`.

Par exemple, pour faire une requête au data store dans un contrôleur :

```js
dvdStoreCtrl.$inject = ['$kinvey', 'KinveyHelper'];
function dvdStoreCtrl($kinvey, KinveyHelper) {
  var vm = this;
  KinveyHelper.isReady().then(function() {
    $kinvey.DataStore.find('products').then(function(data) {
      vm.products = data;
    });
  });
}
```
