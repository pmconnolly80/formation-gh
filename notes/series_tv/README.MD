Tutoriel guidé : "Séries TV préférées"
======================================

> **NOTE**
> Pour des raisons de simplicité, nous saisirons tout le code nécessaire à la création de notre application dans un unique fichier HTML. Dans une application plus complexe, notre code serait réparti dans plusieurs fichiers, et même plusieurs répertoires.


Démarrage
---------

- Dupliquez le répertoire `first_app` créé précédemment pour vous en servir comme base de départ.
- Dans votre `index.html`, copiez le HTML suivant : [series_tv.html](series_tv.html) (HTML qui contient les données en dur).
- Créez une application AngularJS `myApp` que vous appliquerez à la page HTML.


Afficher les données dynamiquement
----------------------------------

- Extrayez les données du HTML (noms de série, num saison, etc.) et stockez-les dans un objet JavaScript identique à celui dans [series_tv.js](series_tv.js). À ce stade, plus aucune série ne doit être affichée dans la page HTML.

**NOTE : Nous avons besoin d'un contrôleur pour exposer les données à la vue.**

- Créez un contrôleur :
```js
myApp.controller('seriesCtrl', function($scope) {
  $scope.data = model;
})
```
- Appliquez le contrôleur à la page HTML :
```html
<body ng-controller="seriesCtrl">
  ...
</body>
```
- Créez une vue qui utilise la directive `ng-repeat` et les data bindings `{{maVariable}}` pour afficher les données fournies par l'application AngularJS. Vous afficherez les données au même endroit que celui où elles apparaissaient initialement.
- Servez-vous à nouveau des data bindings pour rendre dynamique le nom de l'utilisateur, et pour afficher dans une pastille à côté de son nom le nombre d'épisodes dans la liste. HTML de la pastille : `<span class="label label-default">__NOMBRE__</span>`
- Dans le tableau HTML, ajoutez un champ `<input type="checkbox" ng-model="episode.watched" />` sur chaque ligne et expérimentez le fonctionnement de la **liaison de données bidirectionnelle** (A EXPLIQUER EN DÉTAIL).

À ce stade, **c'est comme si nous étions revenus à l'étape précédente, sauf que cette fois-ci, les données sont affichées par une application AngularJS !**


Créer et utiliser des comportements
-----------------------------------

Les comportements permettent d'**ajouter dans une vue des fonctionnalités** qui dépassent la simple logique d'affichage. Ils rendent la vue "active" en lui faisant exécuter des actions.

Note : Les *comportements* sont parfois également appelés *méthodes*.

**Nous avons besoin d'un contrôleur pour exposer les comportements à la vue.** Nous créerons donc les comportements qui suivent dans `seriesCtrl`.

Afficher le nombre d'épisodes restants :
- Créez un comportement `episodesRestants()` qui renvoie le nombre d'épisodes qui n'ont pas été vus (`episode.watched == false`).
- Utilisez ce comportement pour afficher le nombre renvoyé dans la pastille à côté du nom de l'utilisateur.
- Vous ferez disparaître la pastille s'il ne reste plus aucun épisode à regarder, grâce à la directive `ng-hide`.

Modifions maintenant la couleur de la pastille selon le nombre d'épisodes restants :
- S'il reste 5 épisodes non vus ou plus : tout va bien --> couleur verte - `label-success`
- S'il reste 3 ou 4 épisodes non vus : avertissement --> couleur orange - `label-warning`
- S'il reste moins de 3 épisodes non vus : danger --> couleur rouge - `label-danger`

Pour créer cette fonctionnalité, nous utiliserons :
- Un comportement custom `bientotFini()` qui renvoie la classe CSS adéquate en fonction du nombre d'épisodes restants.
- La directive `ng-class` qui permet d'assigner dynamiquement des classes CSS à une balise.

INSISTER SUR LE FAIT QUE TOUT "FONCTIONNE AUTOMATIQUEMENT".<br>
C'est le "two-way data binding" en action.


Réagir aux actions de l'utilisateur
-----------------------------------

A présent, nous allons permettre à l'utilisateur d'ajouter un épisode de son choix à la liste.

- Dans le contrôleur `seriesCtrl`, créez un nouveau comportement `ajouteEpisode()` qui pousse des données dans la variable de scope contenant les épisodes.
- Récoltez les données concernant l'épisode à ajouter via un formulaire. Chaque champ de formulaire utilisera le two-way data binding grâce à ng-model : `<input type="text" ng-model="seriesTitle" />`
- Faites en sorte qu'un clic sur le bouton "Ajouter" déclenche votre méthode `ajouteEpisode()` grâce à la directive `ng-click="doSomething()"`.

FAIRE UNE REMARQUE SUR LE PASSAGE D'ARGUMENTS AUX COMPORTEMENTS.


Filtrer et ordonner les données
-------------------------------

Les filtres peuvent être appliqués à n'importe quel modèle de données. La syntaxe est :

```
{{ expression | filtre }}
```

Plusieurs filtres peuvent être enchaînés pour appliquer des transformations successives à des données.

- Ordonnez les épisodes dans l'ordre alphabétique grâce au filtre `orderBy`.
- Masquez les épisodes vus grâce au filtre `filter`.


Charger les données via Ajax
----------------------------

Pour terminer ce tutoriel, nous allons charger les données utilisées par l'application via une requête Ajax.

Jusqu'à présent, les données étaient déclarées en dur dans notre code JavaScript. Dans une application réelle, les données viendraient plutôt d'une base de données ou d'une API. Pour des raisons de simplicité, nous nous contenterons dans ce tutoriel de charger les données depuis un fichier JSON, mais l'organisation du code serait identique si les données venaient d'une API RESTful. Le principe est de faire une requête Ajax pour obtenir ces données.

- Commencez par créer un fichier [series_tv.json](series_tv.json).
- Adaptez le reste du code pour qu'il utilise une requête Ajax pour charger les données depuis le fichier JSON :
  - Chargez les données dans le bloc `run()` de l'application.
  - Utilisez le service `$http` :
  ```js
  $http.get('series_tv.json').success(function (data) {
    // ...
  });
  ```
