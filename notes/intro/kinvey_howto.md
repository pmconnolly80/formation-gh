Utiliser Kinvey dans un projet AngularJS
========================================

NB. L'article qui suit suppose que vous avez créé un compte et une application sur http://www.kinvey.com/

Pour utiliser Kinvey sur un projet :

1) Charger la librairie Kinvey (depuis un CDN) *après* avoir chargé AngularJS :
```
<script src="//da189i1jfloii.cloudfront.net/js/kinvey-angular-1.1.14.min.js"></script>
```

2) Ajouter Kinvey en dépendance de votre app :

```
angular.module('kinveyApp', ['kinvey']);
```

3) Initialiser Kinvey

```
kinveyApp.run(function($kinvey) {
  $kinvey.init({
    appKey    : 'your_app_key',
    appSecret : 'your_app_secret'
  })
}):
```

## L'utilisateur courant

**IMPORTANT.** Toute application Kinvey a un utilisateur courant (*active user*).

- Un seul utilisateur courant à la fois = personne qui utilise l'appli.
- Doit être créé explicitement (avec un username/pwd par ex) ou programmatiquement (pour les applications ne demandant pas d'authentification).
- Tous les appels d'API sont fait au nom de l'utilisateur courant --> sécurité. Par défaut, données d'un user = accès en lecture mais pas en écriture par les autres utilisateurs.
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
- Peut être obtenu via `$kinvey.getActiveUser()`


## Kinvey gère de nombreuses choses pour nous

- Modèle de données User (username, password, email)
- Création ("signup") et suppression ("destroy") d'un user
- Login / Logout
- Vérification d'email, Mot de passe oublié
- Authentification via réseaux sociaux (Facebook, Google+, Twitter...)

