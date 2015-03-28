Fondamentaux HTML
=================

Squelette basique de page HTML
------------------------------

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <style type="text/css">
    #title { font-size: 30px; }
    .parag { margin-top: 10px; }
    .highlight { background-color: yellow; }
  </style>
  <script>
    // Ici, du code JavaScript
  </script>
</head>
<body>
  <h1 id="title">Hello world</h1>
  <p class="parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p class="parag highlight">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p class="parag">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</body>
</html>
```

Syntaxe HTML
------------

Écrire les balises et attributs en minuscules, et les valeurs d'attributs entre double quotes :
```html
<h1 id="title">Hello world</h1>
```

Fermer les "self-closing" tags facultatif (mais recommandé ?) :
```html
<br>
<!-- ou bien -->
<br/>
```

Plusieurs classes CSS appliquées à la même balise (ici, les classes `first` et `highlight` sont appliquées à la même balise `<p>`) :
```html
<p class="first highlight">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

Sortir les déclarations CSS et JS du HTML
-----------------------------------------

Pourquoi ?

- Réutilisables depuis plusieurs fichiers HTML différents.
- Pré-processing : Sass, Less.js...
- Post-processing : concaténation, minification...

Comment ?

```html
<!-- CSS -->
<link href="path/to/file.css" rel="stylesheet" />
<!-- JavaScript -->
<script src="path/to/script.js"></script>
```

A placer dans le `<head>` de la page HTML, même s'il est parfois recommandé de charger les fichiers JavaScript en bas de page (juste avant la balise `</body>` fermante).

Éviter le CSS et le JS "en ligne"
---------------------------------

Pourquoi ?

- Aucune réutilisabilité.
- Plus difficile à maintenir.
- JavaScript trop "obtrusif", notamment si le navigateur ne prend pas en charge JavaScript.
- (Mais, pratique parfois, pour une solution "quick & dirty").

CSS en ligne (à éviter) :
```html
<p style="background-color:yellow;">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

JavaScript en ligne (à éviter) :
```html
<a href="javascript:alert('Hello !');">Click me</p>
```
