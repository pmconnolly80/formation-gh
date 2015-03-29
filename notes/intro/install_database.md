Formation AngularJS - Base de données
=====================================

L'application que nous allons développer pendant la formation utilise une base de données. Pour simplifier le travail d'installation, j'ai choisi d'utiliser Kinvey (http://www.kinvey.com/) qui nous propose gratuitement une base de données NoSQL dans le cloud accessible via une librairie JavaScript compatible AngularJS (et aussi via une API REST si besoin). C'est parfait pour les besoins de notre application.


Création d'un compte sur Kinvey.com
-----------------------------------

- Si vous n'avez pas déjà un compte Kinvey, rendez-vous sur http://www.kinvey.com pour en créer un gratuitement.
- Allez ensuite sur la console Kinvey (https://console.kinvey.com/apps) et créez une nouvelle application appelée `ngworkshop`,
- Allez sur le dashboard de votre app et prenez note du APP ID et APP SECRET (en haut à droite).
- Copiez ces infos dans le fichier `exos_starters/api_keys.js` et visitez la page `exos_starters/kinvey_ping.html` dans votre navigateur. Cliquez le bouton "Ping Kinvey" et confirmez que vous voyez un message d'alerte "Kinvey Ping Success" qui se termine par "hello [nom-de-votre-app]".


Pourquoi Kinvey ?
-----------------

Il existe de nombreux services de bases de données dans le cloud.

J'ai choisi d'utiliser Kinvey, car c'est un véritable "Backend as a Service" qui propose l'ensemble des fonctionnalités nécessaires à l'élaboration d'une application AngularJS professionnelle : base de données, authentification, hébergement de fichiers statiques, services de géolocalisation... De plus, tous ces services sont accessibles via un SDK AngularJS qui masque la complexité des appels bas niveau à l'API Kinvey. (Cela dit, et si vous le souhaitez, l'API REST est accessible et peut être attaquée directement.)

Une autre solution populaire est MongoLab (https://mongolab.com/) qui propose des bases de données MongoDB dans le cloud, accessibles via une API REST. MongoLab est moins complet que Kinvey (juste une base de données, pas d'autres services comme l'authentification) et plus bas niveau (API REST vs SDK), mais c'est une architecture plus standard ; l'architecture "base de données MongoDB derrière une API REST" pourrait être reproduite en local ou chez un autre hébergeur. Avec Kinvey, vos données sont stockées intégralement chez Kinvey...

D'autres backends as a service seront évoqués au cours de la formation.


Pourquoi ne pas utiliser notre propre base de données ?
-------------------------------------------------------

Nous pourrions installer une base de données sur notre machine de développement comme nous l'avons fait pour Node.js. Le choix le plus répandu est probablement **MongoDB**.

Cela dit, il nous manquerait un composant essentiel : une **interface REST** permettant à l'application AngularJS de communiquer avec la base de données via des requêtes HTTP. N'oublions pas que dans une application web traditionnelle (par ex, PHP/MySQL) :
* Le code ET la base de données s'exécutent côté serveur.
* Les langages serveur proposent des commandes ou librairies pour interagir facilement avec la base de données.

Avec AngularJS et les applications JavaScript en général, le code s'exécute côté client alors que la base de données s'exécute côté serveur. Les **APIs REST** font le trait d'union entre les deux. Certaines bases de données proposent un driver JavaScript, mais c'est plutôt rare.

En conclusion, cela aurait dépassé le cadre de la formation d'installer une base de données et d'implémenter l'API REST permettant de la requêter. Voici les tâches qu'il aurait fallu effectuer :
- Identifier/Créer les différents modèles de données dans la base.
- Créer les routes exposant les opérations sur ces données (`GET /data`, `GET /data/:id`, `POST /data`...).
- Créer le code correspondant à ces routes (c. à d. le code qui interagit effectivement avec la BDD).
- Refaire la même chose pour l'authentification, en créant en plus un mécanisme de persistence du statut de l'utilisateur (session/cookie, JSON Web Tokens...).

Voilà pourquoi nous utilisons Kinvey qui propose toutes ces fonctionnalités clé-en-main et en version gratuite.