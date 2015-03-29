Intégrer l'authentification basée sur Kinvey
============================================

Pré-requis
----------

- Ajoutez le module `api_keys` comme dépendance du module `auth`. Cela va rendre les clés d'API Kinvey accessibles dans le module `auth`.
- Le SDK Kinvey doit être chargé via une balise `<script>` APRÈS AngularJS, et déclaré comme dépendance de l'application principale.
- Le SDK Kinvey doit être initialisé dans la phase `run()` de l'application principale. Suggestion : sortir le code d'initialisation dans un service `KinveyService` avec une méthode `init()`.

Pour plus d'infos, voir [intro/kinvey_howto.md](../intro/kinvey_howto.md).

Créer un service d'authentification
-----------------------------------

Dans `auth/services.js` :

- Créez un service `AuthService` qui implémente 3 méthodes `login()`, `logout()` et `signup()`. Ces méthodes appelleront les méthodes correspondantes de l'API Kinvey.

Dans `auth/controllers.js` :

- Dans les contrôleurs `LoginCtrl` et `RegisterCtrl`, implémentez le code des méthodes appelées lorsque les formulaires de login et d'inscription sont soumis. Ces méthodes devront utiliser le service `AuthService` créé à l'étape précédente.
- Vérifiez dans le dashboard Kinvey (onglet "Users") que les utilisateurs créés via votre application sont bien présents.
- En cas de succès du login ou de l'inscription, redirigez l'utilisateur vers la page d'accueil.
- En cas d'erreur du login ou de l'inscription, contentez-vous de logger l'erreur pour l'instant (`$log.error()` ou `console.error()`).

L'utilisateur courant est-il authentifié ?
------------------------------------------

Afficher le nom de l'utilisateur courant dans la vue principale (quick & dirty).

L'objectif pour l'instant est juste que l'UI reflète si l'utilisateur est loggé ou non.
