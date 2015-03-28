Installation
============

Tâches préparatoires à réaliser avant votre [formation AngularJS](http://ng-workshop.com/fr/formations/angularjs).

Logiciels à installer
---------------------

Avant tout, assurez-vous que les logiciels suivants ou équivalents sont installés sur votre ordinateur :

- Un navigateur web moderne et récent ([Google Chrome](https://www.google.com/chrome/) recommandé).
- Un éditeur de texte ([Sublime Text](http://www.sublimetext.com/) ou [Webstorm](https://www.jetbrains.com/webstorm/) recommandés).
- Un serveur web local (IIS, Apache, Node.js...).

**Remarque importante.** Une application AngularJS peut tourner sur n’importe quel serveur web. Si vous avez déjà IIS, Apache, Nginx ou n’importe quel autre serveur sur votre machine de développement, vous pouvez l’utiliser pour héberger votre application AngularJS (il suffit de placer les fichiers de l’appli AngularJS quelque part sous le “web root” de votre serveur).

Dans la suite de ces instructions, je vous montre comment installer Node.js + ExpressJS comme solution serveur --- EST CE BIEN CES TECHNOS LA ?? ---. C’est un stack assez répandu pour faire tourner les SPA, mais il n’est pas obligatoire.

Installer Node.js
-----------------

[Node.js](https://nodejs.org/) est un environnement d’exécution (*runtime environment*) écrit en JavaScript qui s'exécute sur le serveur (ou sur notre machine de développement) et qui va servir de socle à de nombreux outils ou plugins nécessaires à notre application AngularJS : un serveur web, une solution d'authentification, etc.

Comme la plupart de ces outils et plugins existent sous forme de packages Node et sont installables via le gestionnaire de packages `npm`, Node.js est un outil quasiment incontournable dans le développement d'applications JavaScript.

Pour installer Node.js, je vous conseille de suivre le tuto très bien fait d’OpenClassrooms : http://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/installer-node-js

ATTENTION. Node.js n’a pas d’interface graphique. Toutes les interactions avec Node.js se font en saisissant des lignes de commande (via la Console DOS sur Windows ou le Terminal sur Mac OS).

### Vérifier que Node.js est bien installé

A l’issue de l’installation, vérifiez que node.js est correctement installé en exécutant les commandes suivantes dans le terminal.

Vérifiez que la version de Node.js s’affiche lorsque vous tapez :

    node --version

Vérifiez que la version de npm (le package manager de Node.js) s’affiche lorsque vous tapez :

    npm --version

 A COMPLETER : Installer un package avec npm

Installer un serveur web avec ExpressJS
---------------------------------------

Voir p. 27 de AngularJS Web App Blueprints.

Node.js seul ne permet pas de servir des pages web à un client (comme le fait un serveur Apache, par exemple). Il faut pour cela exécuter un serveur HTTP écrit en node.js qui va exposer et servir les fichiers de notre application à une URL donnée. Il existe plusieurs solutions, mais dans notre cas nous utiliserons le serveur tout simple http-server (https://github.com/indexzero/http-server).

Pour l’installer globalement sur votre machine :

    npm install http-server -g

Si vous taper http-server XX, vous devez voir qqchose d’afficher.

Pour vérifier que le serveur fonctionne correctement, créez un fichier HTML contenant le code suivant :

Enregistrez ce fichier sous le nom index.html dans le répertoire où vous souhaitez faire les exercices pour la formation (à vous de choisir ce répertoire ; en ce qui me concerne, j’utilise Mac OS et mon répertoire ressemble à `/Users/vince/dev/angularjs`).

Dans la console, exécuter la commande permettant de démarrer le serveur `http-server` :

    commande

Préparer la base de données
---------------------------

L’application que nous allons développer pendant la formation utilise une base de données. Pour simplifier le travail d’installation, j’ai choisi d’utiliser MongoLab (https://mongolab.com/) qui nous propose gratuitement une base de données MongoDB dans le cloud accessible via une interface REST. C’est parfait pour une application AngularJS.

- Si vous n'avez pas déjà un compte Mongolab, rendez-vous sur https://mongolab.com/signup/ pour en créer un gratuitement.
- Depuis le dashboard Mongolab, cliquez votre nom d'utilisateur en haut à droite (attention à ne pas confondre "user" et "account"). Vous devriez arriver sur une page qui affiche votre API Key. Prenez-en note, car vous en aurez besoin au cours de la formation.

**Pourquoi ne pas installer la base de données sur notre machine de développement ?** Nous pourrions installer MongoDB sur notre machine de développement comme nous l’avons fait pour Node.js, mais il nous manquerait un composant essentiel : une interface REST permettant à notre application AngularJS de communiquer avec la base de données via des requêtes HTTP. N’oublions pas que dans une application web traditionnelle (par ex, PHP/MySQL), le code ET la base de données s’exécutent côté serveur. Avec AngularJS et les applications JavaScript en général, le code s’exécute côté client alors que la base de données s’exécute côté serveur. Les APIs REST font le trait d’union entre les deux. Certaines bases de données proposent également un driver JavaScript, mais c’est plutôt rare.
En conclusion, cela aurait dépassé le cadre de la formation d’installer une base de données et d’implémenter l’API REST permettant de la requêter. Voilà pourquoi nous utilisons MongoLab qui propose ce service clé-en-main et en version gratuite.
