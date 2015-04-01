Préparer les tests
==================

Voici les instructions pour préparer les tests.

**IMPORTANT** Exécutez les commandes qui suivent dans le répertoire où vous avez installé `exos_starters/testing`.


Installer Karma :

```
npm install -g karma
```

Initialiser un fichier de configuration Karma :

```
karma init karma.config.js
```

Garder tous les choix par défaut. Pour l'emplacement des fichiers source, indiquez :

```
> angular.js
> angular-mocks.js
> *.js
> tests/*.js
```

Exécuter les tests :

```
karma start karma.config.js
```

Par défaut, les tests ne doivent contenir aucune erreur.
