Fondamentaux CSS (Twitter Bootstrap)
====================================

Le système de grille
--------------------

Options Bootstrap de base :
- Nb de colonnes dans la grille : `12`
- Pour démarrer une ligne : `<div class="row">`
- Pour démarrer une colonne : `<div class="col-XX-Y">`...
- ... Où `XX` détermine pour quels terminaux une classe sera active :
  - `.col-xs-` : Extra small devices - Téléphones mobiles (<768px)
  - `.col-sm-` : Small devices - Tablettes (≥768px)
  - `.col-md-` : Medium devices - PC de bureau (≥992px)
  - `.col-lg-` : Large devices - PC de bureau (≥1200px)
- ... Et `Y` représente la largeur de la colonne :
  - `col-xs-6` : 6 unités de large (50%) sur terminaux extra small
  - `col-md-8` : 8 unités de large (2/3) sur terminaux medium

**Exemple 1.** Deux colonnes empilées sur mobile et tablette (`xs` et `sm`) et horizontales sur PC de bureau (à partir de la taille `md`) :
```html
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
```

**Exemple 2.** Deux colonnes empilées sur mobile, la première prenant toute la largeur (`col-xs-12`) et la seconde la moitié de la largeur (`col-xs-6`). Sur PC, les deux colonnes font respectivement 66,66% et 33,33% de la largeur :

```html
<div class="row">
  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
```

**Exemple 3.** Les colonnes commencent à 50% de largeur sur mobile, et 33.3% sur PC :

```html
<div class="row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
```

Les boutons
-----------

Très utile pour déclencher des actions (!!).

```html
<!-- Bouton standard -->
<button type="button" class="btn btn-default">Default</button>

<!-- Bouton "primaire", visuellement renforcé -->
<button type="button" class="btn btn-primary">Primary</button>
```

Attention à l'attribut `type` du bouton lorsqu'il est utilisé dans un formulaire :

```html
<!-- Bouton "normal" -->
<button type="button">Hello</button>

<!-- Bouton "submit" - Déclenche la soumission du formulaire -->
<button type="submit">Enregistrer</button>
```

Les classes Bootstrap de bouton peuvent aussi être appliquées à la balise `<a>` :

```html
<a class="btn btn-default">Default</a>
```

Les composants fréquemment utilisés
-----------------------------------

### Alerts

```html
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>
```

### Panels

```html
<div class="panel panel-default">
  <div class="panel-heading">Panel heading without title</div>
  <div class="panel-body">
    Panel content
  </div>
</div>
```

### Wells

```html
<div class="well">
  Look, I'm in a well!
</div>
```
