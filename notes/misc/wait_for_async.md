Attendre la fin d'une tâche asynchrone avant de poursuivre
==========================================================

On veut appeler une fonction du SDK Kinvey (par exemple, requêter le data store avec `$kinvey.DataStore.find()`), mais cette fonction n'est utilisable qu'une fois le SDK initialisé, c'est à dire une fois la promesse renvoyée par `$kinvey.init()` résolue.

Cet article balaye les différentes manières d'y parvenir.

Dans les scénarios ci-dessous, toute référence à "du code" signifie "du code utilisant le SDK Kinvey".

A. Retarder l'exécution du code
-------------------------------

On pourrait wrapper le code qui utilise le SDK Kinvey dans un `$timeout`. Bien-sûr, c'est une bidouille qui va fonctionner de manière aléatoire. Mais elle prouve que quand le code s'exécute dans le bon ordre, il fonctionne.

Supposons qu'on se trouve dans une directive qui affiche le nom de l'utilisateur courant :

```js
...
return {
  controller: ['$scope', '$kinvey', '$timeout', function($scope, $kinvey, $timeout) {
    $timeout(function() {
      var user = $kinvey.getActiveUser();
      $scope.activeUser = user.username;
    }, 1000);
  }]
};
...
```

B. Conditionner le code à une promesse
--------------------------------------

On peut utiliser la promesse renvoyée par `$kinvey.init()` pour déclencher le code à exécuter.

Supposons qu'on se trouve dans un contrôleur qui doit attendre que Kinvey soit initialisé pour envoyer une requête au data store :

```js
...

kinveyService.init().then(function() {
  // Kinvey is initialized, do something...
  $kinvey.DataStore.find('products').then(function(data) {
    $scope.products = data;
  });
}, function (err) {
  console.error('Kinvey initialization error');
});
...
```

Le problème est que l'initialisation n'a lieu qu'une seule fois, et que l'appel à `$kinvey.init()` se trouve dans le bloc `run()` de l'application (pas dans les contrôleurs, là où la promesse retournée serait utile).

C. Initialiser les routes après l'initialisation de Kinvey
----------------------------------------------------------

Impossible.

Les routes sont déclarées dans un bloc `config()`, Kinvey est initialisé dans un bloc `run()`, et aussitôt après un changement de route est déclenché (événement '$routeChangeStart') pour le chemin en cours.

Si le chemin matche une route, la vue et l'éventuel contrôleur de ce chemin sont activés. Le contrôleur peut très bien utiliser le SDK Kinvey alors qu'il n'a pas fini de s'initialiser.

Si le chemin ne matche aucune route, c'est la route "otherwise" qui sera activée. Elle aussi peut potentiellement déclencher un appel à Kinvey.

On ne contrôle pas le flot d'exécution config() --> run() --> $routeChangeStart.

D. Utiliser la propriété `resolve` des routes
---------------------------------------------

Bonne idée. Ca fonctionne bien.

Mais quel dommage de devoir manuellement ajouter le même `resolve` à chaque route... Une solution consiste à redéfinir `$routeProvider.when()` de sorte que le `resolve` qui attend l'initialisation de Kinvey soit ajouté automatiquement et systématiquement. Voir un exemple de cette technique : http://spin.atomicobject.com/2014/10/04/javascript-angularjs-resolve-routes/
