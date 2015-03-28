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

Seuls les points les plus importants ont été détaillés ci-dessous. Les chemins de fichiers cités dans l'article font référence au contenu du ZIP.



Code source
-----------

Le code source de l'application complète peut être téléchargé dans le zip joint [custom_backend_example.zip](custom_backend_example.zip).

Le point d'entrée est l'application Node.js représenté par le fichier `app.js` à la racine du ZIP.



Authentification
----------------


### Modèle de données

Pour implémenter une authentification custom, il faut avant tout déclarer un modèle de données pour stocker les utilisateurs.

Dans sa version la plus simple (voir `models/admin-users.js`) :

```
adminUser
  - username
  - password
```


### Routes

Les routes suivantes doivent être exposées (avec les méthodes HTTP correspondantes) pour permettre à l'application AngularJS de créer des utilisateurs, puis de les authentifier et de les déconnecter :

    POST /add-user
    POST /login
    GET /logout

Voir la déclaration détaillée des routes dans `routes/api.js`.

Les routes sont rattachées à l'application principale (`app.js`) grâce aux lignes suivantes :

    var api = require('./routes/api');
    app.use('/api', api);

Veillez à ce que `app.use('/api', api);` soit bien appelé AVANT `app.use('/', routes);`.

Le code associé aux routes login/logout fonctionne de la manière suivante :
- login: Crée une variable de session indiquant si l'utilisateur est parvenu à s'identifier.
- logout: Détruit la variable de session.


### Créer un middleware sessionCheck

The next step is to create our middleware function that does a session check.

Installer le module session de ExpressJS :

    npm install express-session --save

Puis, dans `app.js` :

    var session = require('express-session');
    app.use(session());

Voir le code la fonction `sessionCheck()` : si une variable de session indiquant que l'utilisateur est identifié existe, alors l'accès est autorisé. Sinon, l'accès est refusé.



Data Store
----------

En plus de l'authentification, une des fonctionnalités typiques de backend est de permettre à l'appli AngularJS de communiquer avec une base de données (aka *data store*).

L'idée est encore une fois d'exposer des URLs qui permettront à AngularJS d'interagir avec le data store via des requêtes HTTP.

Je vais un peu plus vite dans cette section, qui reprend la même logique que la précédente.


### Modèle de données

Supposons qu'on veuille créer un CMS et qu'on a besoin de stocker des pages. Le modèle de données déclaré avec Mongoose est le suivant (dans `models/page.js`) :

```
Page
  - title
  - url
  - content
  - menuIndex
  - date
```


### Routes

Les routes suivantes doivent être exposées (avec les méthodes HTTP correspondantes) pour permettre à l'application AngularJS de créer des utilisateurs, puis de les authentifier et de les déconnecter.

    GET /api/pages
    POST /api/pages/add
    POST /api/pages/update
    GET /api/pages/delete/:id
    GET /api/pages/admin-details/:id



### Protéger les routes qui doivent l'être

L'étape suivante est de protéger les routes qui doivent l'être en ajoutant le middleware `sessionCheck` au niveau de la déclaration des routes.

Par exemple, seuls les utilisateurs identifiés peuvent créer des pages :

    router.post('/pages/add', sessionCheck, function(request, response) { ... });

