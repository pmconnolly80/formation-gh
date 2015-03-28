Backend custom
==============

Introduction
------------

Une application AngularJS s'exécute intégralement sur un client (la plupart du temps, un navigateur). Cela dit, pour proposer des fonctionnalités réellement utiles, l'application client doit travailler en tandem avec une ou plusieurs **applications serveur**, souvent regroupées sous le terme de "backend".

Typiquement, le backend propose les fonctionalités suivantes :
- Authentification et autorisation des utilisateurs.
- Endpoints sécurisés permettant d'accéder à un data store (aka API REST).
- Exécution de tâches trop lourdes ou impossibles à réaliser sur le client (ex : transcodage d'un fichier vidéo).

Le développeur d'application AngularJS se trouve donc confronté à un choix :

1. Développer son propre backend. Par exemple en utilisant un stack MEAN (MongoDB + ExpressJS + AngularJS + Node.js).
2. Utiliser un backend clé-en-main, souvent appelé Backend As A Service (BaaS) ou Platform As A Service (PaaS). Des solutions comme Parse.com, Kinvey.com, ou Firebase.com proposent des backends généralistes et sont assez populaires avec AngularJS. Ils peuvent être complétés par des web services spécialisés en fonction des besoins (e.g. https://zencoder.com/ pour le transcodage vidéo).

La décision custom vs clé-en-main dépend des compétences de l'équipe de développement, de la sécurité (hébergement des données en interne ou pas), des aspects légaux, du temps et du budget alloués au projet, etc.

Cet article présente la création d'un backend sommaire mais fonctionnel basé sur MongoDB, Mongoose, ExpressJS et Node.js.

Le code final peut être téléchargé dans le zip joint [custom_backend_example.zip]. Seuls les points les plus importants ont été détaillés ci-dessous.

Modèles de données
------------------

Ds le bouquin, il utilise Mongoose.

Page
  - title
  - url
  - content
  - menuIndex
  - date

adminUser
  - username
  - password


Routes
------

GET /api/ - Welcome
GET /api/pages - liste des pages
POST /api/pages/add
POST /api/pages/update
GET /api/pages/delete/:id
GET /api/pages/admin-details/:id (backend)
GET /api/pages/details/:url (frontend)
POST /api/add-user
POST /login
GET /logout

Créer le fichier `routes/api.js`.

Ajouter les lignes suivantes dans `app.js` :

    var api = require('./routes/api');
    app.use('/api', api);

Veiller à ce que `app.use('/api', api);` soit bien appelé AVANT `app.use('/', routes);`.

Créer la route pour le login
----------------------------

Ajouter le code dans `routes/api.js`:

    router.post('/login', function() { ... });

Créer la route pour le logout
-----------------------------

Le code détruit la session en cours.

    router.get('/logout', function() { ... });

Writing the sessionCheck middleware
-----------------------------------

The next step is to create our middleware function that does a session check.

Installer le module session de ExpressJS :

    npm install express-session --save

Puis, dans `app.js` :

    var session = require('express-session');
    app.use(session());

Créer la fonction `sessionCheck()`.

Protéger les routes qui doivent l'être en ajoutant cette fonction, par exemple :

    router.post('/pages/add', sessionCheck, function(request, response) { ... });


Securing your admin section
===========================

IMPORTANT. Sécuriser :
- L'interface d'admin sur le client
- Les APIs serveur


Arrêter et redémarrer le serveur avant de tester une URL comme http://localhost:3000/api.
