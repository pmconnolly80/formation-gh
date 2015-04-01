Petites astuces lors de la création de directives custom
========================================================

Si vos directives custom possèdent une fonction `link` :

Tip #1
------

Utilisez `scope.$watch("value")` pour modifier le DOM en réponse aux changements de modèle :

```js
scope.$watch('value', function (newValue) {
  var markup = '<button class="btn btn-default btn-xs">Hey</button>';
  element.append(markup);
});
```

Tip #2
------

Quand vous utilisez les événements natifs du navigateur (e.g. `click`) ou des callbacks custom, wrapper le code qui modifie le modèle dans `scope.$apply()` (sinon, AngularJS n'a aucun moyen d'être averti des changements).

```js
element.on('click', function() {
  scope.$apply(function() {
    scope.value = newValue;
  });
});
```
