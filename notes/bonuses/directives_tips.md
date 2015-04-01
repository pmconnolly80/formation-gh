Petites astuces lors de la création de directives custom
========================================================

Si vos directives custom ont une fonction `link` :

Tip #1
------
Utiliser `scope.$watch("value")` pour modifier le DOM en réponse aux changements de modèle.

Tip #2
------

Quand vous utilisez les événements natifs du navigateur (e.g. `click`) ou des callbacks custom, wrapper le code qui modifie le modèle dans `scope.$apply()` (sinon, AngularJS n'a aucun moyen d'être averti des changements).
