Bower
=====

Package manager pour les librairies front-end (AngularJS, UI-Router...).


Installer bower
---------------

Bower est un outil en ligne de commande, il doit donc s'installer avec le flag `-g` avec npm :

    npm install -g bower

    # Mac/Unix
    sudo npm install -g bower


Installer un package
--------------------

On utilise `bower install`. Les packages sont installés dans `bower_components/`.

    bower install <package>


Sauvegarder la liste des packages installés
-------------------------------------------

Les packages installés peuvent être sauvegardés dans un fichier `bower.json` (identique au `package.json` de Node.js).

Exemple de `bower.json` :

```
{
  "name": "DVD Store",
  "version": "0.0.1",
  "authors": [
    "Vincent C."
  ],
  "description": "Un super DVD Store",
  "main": "app.js",
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}
```

1) Avant tout, créer un fichier `bower.json`

Vous pouvez partir d'un modèle ou créer ce fichier interactivement avec :

    bower init

2) Ensuite, il faut penser à sauvegarder les packages installés dans `bower.json`.

La commande `bower install <package> --save` va installer `<package>` à la liste des `dependencies` dans `bower.json`.

    # Installe un package et ajoute-le aux dependencies de bower.json
    $ bower install <package> --save

La commande `bower install <package> --save-dev` va installer `<package>` à la liste des `devDependencies` dans `bower.json`.

    # Installe un package et ajoute-le aux devDependencies de bower.json
    $ bower install <package> --save-dev
