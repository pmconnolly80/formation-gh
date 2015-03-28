# AngularJS - Directives d'affichage

## Liaison de données unidirectionnelle

Unidirectionnelle = depuis le modèle de données vers le HTML.

- Avec `{{` et `}}` :

```html
<div>There are {{todos.length}} items</div>
```

- Avec la directive `ng-bind` comme attribut :

```html
<!-- Permet de masquer le binding en attendant que les données soient chargées -->
<div>
  There are <span ng-bind="todos.length"></span> items
</div>
```

### Empêcher le inline binding - `ng-non-bindable`

Avec la directive `ng-non-bindable` :

```html
<div ng-non-bindable>
  AngularJS uses {{ and }} characters for templates
</div>
```

Les symboles `{{` et `}}` sont affichés au lieu d'être interprétés par AngularJS.

## Liaison de données bidirectionnelle - `ng-model`

Avec la directive `ng-model` :

```html
<div>The first item is: {{todos[0].action}}</div>

...

<input name="firstItem" ng-model="todos[0].action" />
```

Seulement sur les balises `input`, `select` et `textarea` !

## Répéter des éléments avec `ng-repeat`

- Énumérer le contenu d'un array :

```html
<tr ng-repeat="item in todos">
  <td>{{item.action}}</td>
  <td>{{item.complete}}</td>
</tr>
```

- Énumérer les propriétés d'un objet :

```html
<tr ng-repeat="item in todos">
  <td ng-repeat="prop in item">{{prop}}</td>
</tr>
```

- Travailler avec les données d'un objet :

```html
...
<tr ng-repeat="item in todos">
  <td ng-repeat="(key, value) in item">
    {{key}}={{value}}
</td>
</tr>
...
```

- Utiliser les variables intégrées de `ngRepeat` (`$index`, `$odd`...) :

```html
<tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
  <td>{{$index + 1}}</td>
  <td ng-repeat="prop in item">{{prop}}</td>
</tr>
```

## Charger une vue partielle - `ng-include`

```html
<ng-include src="'table.html'"></ng-include>
```

- La vue partielle est chargée du serveur, son contenu et ses directives sont compilés, puis elle est ajoutée au DOM.
- Notez les guillemets autour du chemin du fichier : `'table.html'`.
- Il faut explicitement utiliser la balise fermante `</ng-include>`.

### Vue partielle dynamique

Passer une fonction plutôt qu'une chaîne à l'attribut `src` de `ng-include`.

Quelque part dans le contrôleur :
```js
$scope.viewFile = function () {
  return $scope.showList ? "list.html" : "table.html";
};
```

Dans le HTML :

```html
<ng-include src="viewFile()"></ng-include>
```

## Afficher des blocs de manière conditionnelle - `ng-switch`

Usage :
```
<ANY ng-switch="expression">
  <ANY ng-switch-when="matchValue1">...</ANY>
  <ANY ng-switch-when="matchValue2">...</ANY>
  <ANY ng-switch-default>...</ANY>
</ANY>
```

ASTUCES :
- Utiliser `ng-switch` pour alterner entre de petits blocs simples de contenu, qui ont des chances d'être tous affichés à l'utilisateur dans le cadre d'une utilisation normale de l'application.
- Utiliser `ng-include` pour le contenu plus complexe ou le contenu à réutiliser dans plusieurs parties de l'application. Un temps de latence est à prévoir lors du premier chargement de chaque vue partielle via `ng-include`.

## Masquer les expressions de template binding inline pas encore traitées - `ng-cloak`

Appliquer la directive `ng-cloak` à des éléments qu'il faut cacher jusqu'à ce qu'ils aient été traités (c. à d. compilés) par AngularJS.

```html
<label ng-cloak>
  <input type="radio" ng-model="data.mode" value="{{button}}" ng-checked="$first">
  {{button}}
</label>
```
