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

### `package.json`

Puisque notre projet utilise Grunt, c'est une bonne idée de **capturer cette dépendance** dans un fichier `package.json`. Ce fichier est utilisé par Node.js pour capturer et gérer les dépendances d'un projet.

Le fichier `package.json` peut être créé de deux manières :
- En copiant un `package.json` existant, et l'adapter.
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


Créer des tâches Grunt
----------------------

Maintenant que tout est en place, le moment est venu de remplir notre fichier `Gruntfile.js` pour indiquer à Grunt les tâches à effectuer.

Nous allons lui confier les tâches suivantes :

- Vérifier que notre code JS est propre grâce à JSHint.
- Merger les fichiers JS du répertoire `controllers` en un seul fichier.
- Minifier le fichier JS résultant file.
- Exécuter quelques commandes shell de nettoyage.

Pour exécuter les tâches ci-dessus, il nous faut installer des packages Node.js supplémentaires :

- `grunt-contrib-jshint` : analyse du code
- `grunt-contrib-concat` : merge plusieurs fichiers en un seul
- `grunt-contrib-uglify` : minifie le JavaScript
- `grunt-shell` : exécute des commandes shell depuis une tâche Grunt

Installez ces packages avec `npm install` en prenant soin de les sauvegarder dans `package.json`.


To start, we will add only one task which is jshint and specify scripts.js in the list of files that need to be linted.

CODE SOURCE

Exécuter :

    grunt

Ajout des tâches :
- `concat` - NB. Ordre des fichiers .js dans `src` == Ordre du merge
- `uglify`
Chargement des plugins nécessaires, e.g. grunt-contrib-concat

## Exécuter des commandes Shell via Grunt

Another really helpful plugin in Grunt is grunt-shell. This allows us to effectively run clean-up activities such as deleting .tmp files and moving files from one folder to another.


As you can see from the code we added, we are first deleting the merged.js file, then creating a new folder called deploy and moving our merged.min.js file into it. Windows users would need to use the appropriate DOS commands for deleting and copying the files.

La commande `grunt` par défaut exécute toutes les tâches listées dans `grunt.registerTask()`, mais ces tâches peuvent être exécutées individuellement :

    grunt jshint
    grunt concat


At times if you'd like to run just two of the three tasks, then you can register them separately as another bundled task in the Grunt file.

    grunt.registerTask('concat-min', ['concat','uglify']);

Puis :
    grunt concat-min
