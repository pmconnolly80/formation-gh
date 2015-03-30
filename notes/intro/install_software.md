Formation AngularJS - Logiciels à installer
===========================================

Tâches préparatoires à réaliser avant votre [formation AngularJS](http://ng-workshop.com/fr/formations/angularjs).


Logiciels à installer
---------------------

Avant tout, assurez-vous que les logiciels suivants ou équivalents sont installés sur votre ordinateur :

- Un navigateur web moderne et récent ([Google Chrome](https://www.google.com/chrome/) recommandé).
- Un éditeur de texte ([Sublime Text](http://www.sublimetext.com/) ou [Webstorm](https://www.jetbrains.com/webstorm/) recommandés).
- Un serveur web local (IIS, Apache, Node.js...).

**Remarque importante.** Une application AngularJS peut tourner sur n'importe quel serveur web. Si vous avez déjà IIS, Apache, Nginx ou n'importe quel autre serveur sur votre machine de développement, vous pouvez l'utiliser pour héberger votre application AngularJS (il suffit de placer les fichiers de l'appli AngularJS quelque part sous le “web root” de votre serveur).

Dans la suite de ces instructions, je vous montre comment installer Node.js + ExpressJS comme solution serveur --- EST CE BIEN CES TECHNOS LA ?? ---. C'est un stack assez répandu pour faire tourner les SPA, mais il n'est pas obligatoire.


Installer Node.js
-----------------

[Node.js](https://nodejs.org/) est un environnement d'exécution (*runtime environment*) écrit en JavaScript qui s'exécute sur le serveur (ou sur notre machine de développement) et qui va servir de socle à de nombreux outils ou plugins nécessaires à notre application AngularJS : un serveur web, une solution d'authentification, etc.

Comme la plupart de ces outils et plugins existent sous forme de packages Node et sont installables via le gestionnaire de packages `npm`, Node.js est un outil quasiment incontournable dans le développement d'applications JavaScript.

Pour installer Node.js, je vous conseille de suivre le tuto très bien fait d'OpenClassrooms : http://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/installer-node-js

ATTENTION. Node.js n'a pas d'interface graphique. Toutes les interactions avec Node.js se font en saisissant des lignes de commande (via la Console DOS sur Windows ou le Terminal sur Mac OS).

### Vérifier que Node.js est bien installé

A l'issue de l'installation, vérifiez que node.js est correctement installé en exécutant les commandes suivantes dans le terminal.

Vérifiez que la version de Node.js s'affiche lorsque vous tapez :

    node --version

Vérifiez que la version de npm (le package manager de Node.js) s'affiche lorsque vous tapez :

    npm --version


Installer un serveur web avec ExpressJS
---------------------------------------

Installons le module ExpressJS pour Node.js.

Commençons par installer le générateur d'application ExpressJS (http://expressjs.com/starter/generator.html) avec la commande suivante :

    npm install -g express-generator
    # Linux/Mac: sudo npm install –g express-generator

Le flag `-g` dénote une installation globale. Il faut faire une installation globale pour pouvoir accéder à l'exécutable `express` depuis la ligne de commande.


### Créer une application ExpressJS

    express my-server

On obtient un squelette d'application dans le répertorie `my-server`. Des dépendances ont également été déclarées dans le fichier `package.json`.

Pour installer ExpressJS proprement dit et les autres dépendances :

    cd my-server && npm install

Démarrer le serveur web, qui sert le contenu du répertoire `public` :

    # Soit avec la commande conseillée lors de l'install :
    DEBUG=my-server:* ./bin/www

    # Soit avec :
    npm start

Ouvrez votre navigateur et visitez l'adrresse [http://localhost:3000](http://localhost:3000).
Vous devriez voir le message de bienvenue d'Express.

**JE VOUS CONSEILLE DE PLACER TOUS LES EXERCICES RÉALISÉS PENDANT LA FORMATION À L'INTÉRIEUR DU RÉPERTOIRE `public`, À RAISON D'UN RÉPERTOIRE PAR EXERCICE.**


Préparer la base de données
---------------------------

Pour la base de données, voir [install_database.md](install_database.md).
