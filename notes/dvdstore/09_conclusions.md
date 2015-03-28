# DVD Store - Conclusions


## Améliorations possibles

- URL Patterns pour les catégories, les pages, un produit individuel... Ex : `#/products/Espionnage`, `#/product/345466`...
- Gérer la liste des catégories et la pagination sur le serveur (plutôt que sur le client, avec des filtres).
- Interface d'admin sécurisée pour administrer le catalogue.
- Etc.



## Conclusion du DVD Store - Petite appli structurée comme une grande

- Utilise tous les "briques" AngularJS fondamentales : modules, contrôleurs, directives, services, filtres...
- Utilise les bonnes pratiques d'architecture d'une appli :
  - Encapsule les **fonctionnalités transversales** dans des SERVICES (ex : accès au backend), ensuite injectables dans les autres composants qui en ont besoin (contrôleurs, directives...).
  - Encapsule les **widgets ou les comportements associés à l'UI** dans des DIRECTIVES.
  - Encapsule les **fonctionnalités réutilisables** sur un autre projet dans leur propre MODULE (ex : `customFilters`).
  - Dans les contrôleurs, **n'expose aux vues que les fonctionnalités dont elles ont besoin**.
- **Organisation des fichiers** valide pour une application réelle (par composant, comme `cart`).



# Directives AngularJS du DVD Store

Revoyons quelques directives AngularJS utilisées dans le DVD Store pour bien fixer les idées.

Profitons-en pour introduire quelques nouvelles directives.



## AngularJS - Directives d'affichage

- Liaison de données unidirectionnelle - `{{` ... `}}`
- Empêcher le inline binding - `ng-non-bindable`
- Liaison de données bidirectionnelle - `ng-model`
- Répéter des éléments avec `ng-repeat`
- Charger une vue partielle - `ng-include`
  - Vue partielle dynamique
- Afficher des blocs de manière conditionnelle - `ng-switch`
- Masquer les expressions de template binding inline pas encore traitées - `ng-cloak`

Détails : [07_directives_affichage.md](07_directives_affichage.md)



## AngularJS - Directives de gestion d'événement et d'attributs HTML

- Cacher/Afficher - `ng-hide`, `ng-show`, `ng-if`
- Gérer les classes et les CSS - `ng-class` et `ng-style`
- Gérer les événéments - `ng-click`, `ng-mouseover`...
  - Créer une directive pour gérer un événement custom
- Gérer les attributs booléens (`checked`, `disabled`...)
- Gérer les attributs contenant des liens (`href`, `src`...)

Détails : [07_directives_affichage.md](08_directives_evenements.md)
