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

Mais c'est dommage d'initialiser une vue et un contrôleur qu'on ne va même pas utiliser... N'y a-t-il pas un endroit plus en amont où on pourrait tester le statut de l'utilisateur pour faire la redirection ? Par exemple, au niveau du routeur ?


Amélioration possible
---------------------

Plutôt que de tester manuellement si une route requiert d'être identifié ou non, on pourrait associer une variable custom (par ex, `loginRequired`) aux routes qui doivent être protégées. Cela se fait au niveau de la déclaration des routes avec la propriété `data` :

```js
$stateProvider
  .state('admin.home', {
    url: '/home',
    templateUrl: 'common/homeView.html',
    data: {
      loginRequired: true,  // Variable custom, on pourrait l'appeller autrement
    }
  })
```

A chaque changement de route, on pourrait ensuite tester la valeur de cette variable pour décider s'il faut rediriger l'utilisateur ou non en fonction de son statut :

```js
AppCtrl.$inject = ['$rootScope', '$kinvey', '$state'];
function AppCtrl($rootScope, $kinvey, $state) {

  // A chaque changement de route...
  $rootScope.$on('$stateChangeStart', function(event, toState){
    // ... récupère le user courant
    var user = $kinvey.getActiveUser();
    if (toState.data.loginRequired && (null == user)) {
      // Interrompt le changement de route.
      event.preventDefault();
      // Et redirige ailleurs.
      $state.go('admin.login');
    }
  })
}
```

Le problème avec Kinvey, c'est le SDK n'est pas encore initialisé au moment où le premier changement de route se produit (au chargement initial de l'application). Une possible solution de contournement serait de stocker le statut de l'utilisateur courant dans un cookie (local) de manière à pouvoir récupérer immédiatement son statut.

