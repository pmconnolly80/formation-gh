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

 A COMPLETER : Installer un package avec npm


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

    npm start

Ouvrez votre navigateur et saisissez http://localhost:3000 dans la barre d'adresse.

A ce stade, on pourrait exécuter une application AngularJS depuis un fichier `index.html` placé dans `public` et référençant la version CDN d'AngularJS.


Voir p. 27 de AngularJS Web App Blueprints.

Node.js seul ne permet pas de servir des pages web à un client (comme le fait un serveur Apache, par exemple). Il faut pour cela exécuter un serveur HTTP écrit en node.js qui va exposer et servir les fichiers de notre application à une URL donnée. Il existe plusieurs solutions, mais dans notre cas nous utiliserons le serveur tout simple http-server (https://github.com/indexzero/http-server).

Pour l'installer globalement sur votre machine :

    npm install http-server -g

Si vous taper http-server XX, vous devez voir qqchose d'afficher.

Pour vérifier que le serveur fonctionne correctement, créez un fichier HTML contenant le code suivant :

Enregistrez ce fichier sous le nom index.html dans le répertoire où vous souhaitez faire les exercices pour la formation (à vous de choisir ce répertoire ; en ce qui me concerne, j'utilise Mac OS et mon répertoire ressemble à `/Users/vince/dev/angularjs`).

Dans la console, exécuter la commande permettant de démarrer le serveur `http-server` :

    commande

Préparer la base de données
---------------------------

Pour la base de données, voir [install_database.md](install_database.md).
