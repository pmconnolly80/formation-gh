# AnguarJS - Directives de gestion d'événement et d'attributs HTML

## Cacher/Afficher - `ng-hide`, `ng-show`, `ng-if`

Directives `ng-hide` et `ng-show` :

```html
<td>
  <span ng-hide="item.complete">(Incomplete)</span>
  <span ng-show="item.complete">(Done)</span>
</td>
```

NB. Ces directives masquent le contenu via CSS, mais ne le retirent pas du DOM.

Utiliser `ng-if` pour retirer le contenu du DOM :
```html
<td>
  <span ng-if="!item.complete">(Incomplete)</span>
  <span ng-if="item.complete">(Done)</span>
</td>
```

## Gérer les classes et les CSS - `ng-class` et `ng-style`

- Avec la directive `ng-class` :

```html
<p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax</p>
```

- Avec la directive `ng-style` :

```html
<input type="button" value="set color" ng-click="myStyle={color:'red'}">
<input type="button" value="set background" ng-click="myStyle={'background-color':'blue'}">
<input type="button" value="clear" ng-click="myStyle={}">
<br/>
<span ng-style="myStyle">Sample Text</span>
```

## Gérer les événéments - `ng-click`, `ng-mouseover`...

AngularJS propose de nombreuses directives pour la gestion des événements : `ng-click`, `ng-mouseover`...

La bonne pratique consiste à attacher les *event handlers* en ligne, dans le HTML :

```html
<tr ng-repeat="item in todos" ng-class="data.rowColor"
    ng-mouseenter="handleEvent($event)" ng-mouseleave="handleEvent($event)">
  ...
</tr>
```

Et à les relier à des **méthodes de contrôleur** :

```js
$scope.handleEvent = function (e) {
  console.log("Event type: " + e.type);
  $scope.data.columnColor = e.type == "mouseover" ? "Green" : "Blue";
}
```

### Créer une directive pour gérer un événement custom

Créons une directive `tap` pour gérer les événements `touchstart` et `touchend` pour lesquels AngularJS ne propose pas de directive native.

Dans le JavaScript :

```js
angular.module("exampleApp", [])
  .controller("defaultCtrl", function ($scope, $location) {
    $scope.message = "Tap Me!";
  })
  .directive("tap", function () {
    return function (scope, elem, attrs) {
      elem.on("touchstart touchend", function () {
        scope.$apply(attrs["tap"]);
      });
    }
  });
```

Dans le HTML :

```html
<div id="todoPanel" class="panel" ng-controller="defaultCtrl">
  <div class="well" tap="message = 'Tapped!'">
    {{message}}
  </div>
</div>
```

- Le *event handler* est déclaré avec la méthode `on` fournie par jqLite.
- L'expression contenue dans l'attribut `tap` est évaluée grâce la méthode `$scope.apply()`.

## Gérer les attributs booléens (`checked`, `disabled`...)

La spécification HTML n'oblige pas les navigateurs à préserver les valeurs des attributs booléens comme `checked` ou `disabled`. (Leur présence signifie `true` et leur absence `false`.)

Si l'on place une expression AngularJS dans un tel attribut, alors l'information de binding sera perdue quand le navigateur droppe l'attribut. Les directives `ngChecked` ou `ngDisabled` permettent de résoudre ce problème : elles ne sont pas retirées par le navigateur et fournissent donc un endroit fiable pour stocker l'information de binding.

Voir la doc pour les autres attributs booléens.

## Gérer les attributs contenant des liens (`href`, `src`...)

L'utilisation de markup AngularJS comme <span ng-non-bindable>`{{hash}}`</span> dans un attribut `href` va envoyer l'utilisateur sur la mauvaise URL s'il clique le lien avant qu'AngularJS ait pu remplacer <span ng-non-bindable>`{{hash}}`</span> par sa valeur. Jusqu'à ce qu'AngularJS ait pu faire son travail, le lien va être cassé et il a de fortes chances de renvoyer une erreur 404 s'il est cliqué.

La directive `ngHref` résout ce problème :

- Mauvaise façon d'écrire un lien :

```html
<a href="http://www.gravatar.com/avatar/{{hash}}"/>
```

- Bonne façon d'écrire un lien :

```html
<a ng-href="http://www.gravatar.com/avatar/{{hash}}"/>
```

Autres attributs concernés :
- Utiliser la directive `ngSrc` à la place de l'attribut `src`.
- Utiliser la directive `ngSrcset` à la place de l'attribut `srcset`.
