Grunt
=====

Grunt == task runner JavaScript. Objectif : automatiser les tâches.

NB. Pour exécuter les commandes qui suivent, placez-vous dans le répertoire de l'application `dvdstore` créée précédemment.


Installation
------------

Commencer par installer la **Command Line Interface (CLI)** de Grunt :

    npm install -g grunt-cli

(`grunt-cli` lance la version de Grunt installée via le Grunt file ; permet d'avoir différentes version de Grunt sur la même machine)

Pour configurer les tâches Grunt et la manière de les exécuter, créez un fichier `Gruntfile.js` à la racine du projet. Nous remplirons le contenu de ce fichier plus tard.


### Créer le fichier `package.json`

Puisque notre projet utilise Grunt, c'est une bonne idée de **capturer cette dépendance** dans un fichier `package.json`. Ce fichier est utilisé par Node.js pour capturer et gérer les dépendances d'un projet.

Le fichier `package.json` peut être créé de deux manières :
- En copiant un `package.json` existant, et en l'adaptant.
- En partant de zéro avec la commande `npm init`.

Exemple de contenu de `package.json` :

```
{
  "name": "dvdstore",
  "version": "1.0.0",
  "description": "Une super boutique de DVD",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vincent Caillierez",
  "license": "ISC"
}
```

A présent, installez Grunt :

    npm install grunt --save-dev

Le flag `--save-dev` permet d'enregistrer la dépendance à Grunt dans `package.json`. Ainsi, il sera facile de **réinstaller le projet avec toutes ses dépendances** dans un autre environnement, par exemple pour le *déploiement*.

Vérifiez que tout est OK :

- Voyez vous la version de Grunt en tapant `grunt –-version` ?
- Y a-t-il à présent un répertoire appelé `node_modules` dans votre projet ?
- Dans `package.json`, la propriété `devDependencies` mentionne-t-elle Grunt ?

Tant qu'on y est, nous aurons également besoin des packages Node.js suivants :

- `grunt-contrib-jshint` : analyse du code
- `grunt-contrib-concat` : merge plusieurs fichiers en un seul
- `grunt-contrib-uglify` : minifie le JavaScript
- `grunt-shell` : exécute des commandes shell depuis une tâche Grunt

Installez-les avec `npm install` en prenant soin de les sauvegarder dans `package.json`.

Vérifiez que `package.json` contient bien toutes les dépendances citées dans cette section.


Créer des tâches Grunt
----------------------

Maintenant que tout est en place, le moment est venu de remplir notre fichier `Gruntfile.js` pour indiquer à Grunt les tâches à effectuer.

Nous allons lui confier les tâches suivantes :

- Vérifier que notre code JS est propre grâce à JSHint.
- Merger les fichiers JS du répertoire `controllers` en un seul fichier.
- Minifier le fichier JS résultant file.
- Exécuter quelques commandes shell de nettoyage.

Commençons par la tâche JSHint.

Prenez le code de [Gruntfile.js](Gruntfile.js) pour le copier dans votre `Gruntfile.js`.

Puis, dans le terminal, exécutez la commande :

    grunt

Ajout des tâches :
- Modifiez la tâche `concat` de façon à concaténer tous les fichiers situés dans le répertoire `controllers`, puis à les minifier dans `build/controllers.min.js`.
- Si vous n'êtes pas sous Unix, vous adapterez le code de la commande `shell`.


Exécuter les tâches
-------------------

La commande `grunt` exécute par défaut toutes les tâches listées dans `grunt.registerTask()`, mais ces tâches peuvent être exécutées individuellement :

    grunt jshint
    grunt concat


Si on veut exécuter ensemble un groupe de tâches spécifiques, il suffit de les déclarer sous un autre "alias" de tâches groupées :

    grunt.registerTask('concat-min', ['concat','uglify']);

Puis :

    grunt concat-min
