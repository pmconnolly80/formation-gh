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
- Copier un `package.json` existant, et l'adapter.
- Démarrer de zéro avec la commande `npm init`.

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
  "license": "ISC",
  "devDependencies": {
    "grunt": "^0.4.5"
  }
}
```

A présent, installez Grunt :

    npm install grunt --save-dev

Le flag `--save-dev` permet d'enregistrer la dépendance à Grunt dans `package.json`. Ainsi, il sera facile de **réinstaller le projet avec toutes ses dépendances** dans un autre environnement, par exemple pour le *déploiement*.

Une fois Grunt installé, vérifiez que tout est en place en checkant sa version :

    grunt –-version




        <section class="size-s leftp" data-markdown>
          <script type="text/template">
## Créer des tâches Grunt

The next step is to create a Grunt file that will list out the tasks that we need Grunt to perform.

For now, we will ask it to do four simple tasks, first check if our JS code is clean using JSHint, then we will merge three JS files into one and then minify the JS file, and finally we will run some shell commands to clean up.

Dans le même répertoire que `package.json`, créer un fichier `gruntfile.js`.

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
