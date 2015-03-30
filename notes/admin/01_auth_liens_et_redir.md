Auth - Liens et Redirections
============================

Une fois le SDK Kinvey correctement initialisé (via un `resove`), on a la garantie d'avoir l'utilisateur courant dans chaque contrôleur/vue initialisés par le routeur. Bien entendu, l'utilisateur courant sera `null` quand l'utilisateur n'est pas encore authentifié.

Implémentez les **redirections** suivantes :
1. Après login, redirigez l'utilisateur vers la page d'accueil.
2. Après signup, redirigez l'utilisateur vers la page d'accueil. (Dans le SDK Kinvey, la commande `$kinvey.User.signup()` authentifie l'utilisateur dans la foulée.)
3. Si l'utilisateur est déja authentifié et qu'il se rend sur la page de login ou de signup, redirigez-le vers la page d'accueil.
4. Si l'utilisateur n'est pas authentifié et qu'il se rend sur la home, redirigez-le vers la page de login.

Implémentez les **liens** suivants :
- Dans le formulaire de login, ajoutez un lien permettant d'accéder au formulaire de signup.


Où faut-il faire la redirection ?
---------------------------------

D'après vous, quel est le meilleur endroit pour implémenter les redirections 3 et 4 ? C'est-à-dire, des redirections basées sur le statut courant de l'utilisateur.

Puisque c'est dans les contrôleurs que la variable `currentUser` est disponible, il est tentant d'écrire :

```js
/**
 * Exemple de redirection pour "si le user est déjà loggé et qu'il va sur le form de login,
 * redirige-le vers la page d'accueil".
 */
LoginCtrl.$inject = ['AuthService', '$state', 'currentUser'];
function LoginCtrl(AuthService, $state, currentUser) {
  if (null != currentUser) {
    $state.go('admin.home');
  }
}
```
