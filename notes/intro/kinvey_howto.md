Utiliser Kinvey dans un projet AngularJS
========================================


L'article qui suit suppose que vous avez créé un compte et une "application" sur http://www.kinvey.com/.


Installer Kinvey
----------------

Pour utiliser Kinvey dans un projet AngularJS :

1) Charger la librairie Kinvey (depuis un CDN) *après* avoir chargé AngularJS :

```html
<script src="//da189i1jfloii.cloudfront.net/js/kinvey-angular-1.1.14.min.js"></script>
```

2) Ajouter `kinvey` en dépendance de votre app AngularJS :

```js
angular.module('kinveyApp', ['kinvey']);
```

3) Initialiser Kinvey :

```
kinveyApp.run(function($kinvey) {
  $kinvey.init({
    appKey    : 'your_app_key',
    appSecret : 'your_app_secret'
  });
}):
```

ATTENTION. Kinvey doit être initialisé avant de pouvoir être utilisé. `$kinvey.init()` renvoie une promesse qui permet d'attendre le résultat de l'initialisation.


L'utilisateur courant
---------------------

DOC: http://devcenter.kinvey.com/angular/guides/users

**IMPORTANT.** Toute application Kinvey a un utilisateur courant (*active user*).

- Un seul utilisateur courant à la fois == personne qui utilise l'appli.
- Doit être créé explicitement (avec un username/pwd par ex) ou programmatiquement (pour les applications ne demandant pas d'authentification).
- Tous les appels d'API sont fait au nom de l'utilisateur courant --> sécurité. Par défaut, données d'un user = accessibles en lecture, mais pas en écriture par les autres utilisateurs.
- Est représenté par un objet JS litéral :
```
{
  _id      : 'user-id',
  _acl     : { /* ACL */ },
  _kmd     : { /* Metadata */ },
  username : 'username',
  password : 'password',
  email    : 'email'
}
```
- Peut être récupéré dans le code via `$kinvey.getActiveUser()`.


Gestions des utilisateurs et de l'authentification
--------------------------------------------------

DOC: http://devcenter.kinvey.com/angular/guides/users

Au-delà de l'utilisateur courant, Kinvey nous permet de gérer les utilisateurs d'une application en général.

Fonctionnalités proposées :
- Modèle de données `User` (username, password, email).
- Création ("signup") et suppression ("destroy") d'un user.
- Login / Logout.
- Vérification d'email, mot de passe oublié.
- Authentification via les réseaux sociaux (Facebook, Google+, Twitter...).

Imaginez le travail si on avait dû réaliser toutes ces tâches manuellement !

Ici, il nous suffit d'utiliser les méthodes correspondantes dans le SDK Kinvey :
- `$kinvey.User.signup()`
- `$kinvey.User.login()`
- `$kinvey.User.logout()`
- ...


Le data Store
-------------

DOC: http://devcenter.kinvey.com/angular/guides/datastore

L'unité élémentaire de données est une **entité**, et les entités de même type sont regroupées en **collections**. Une entité est un ensemble de **paires clé-valeur stockées au format JSON**.

**IMPORTANT.** Quasiment toutes les opérations sur le data store renvoient des promesses, JAMAIS DES DONNÉES DIRECTEMENT.

Sauvegarder une entité :

```js
var promise = $kinvey.DataStore.save('collection-name', {
  _id  : 'optional-id',
  prop : 'value'
});
```

Charger une entité :

```js
var promise = $kinvey.DataStore.get('collection-name', 'the-id');
```
