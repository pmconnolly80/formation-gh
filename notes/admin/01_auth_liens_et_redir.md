Auth - Liens et Redirections


Une fois SDK Kinvey correctement initialisé (via un `resove`), on a la garantie d'avoir l'utilisateur courant dans chaque contrôleur/vue initialisés par le routeur. Bien entendu, l'utilisateur courant sera `null` pour les utilisateurs non authentifiés.

Implémentez les **redirections** suivantes :
- Après login, redirigez l'utilisateur vers la page d'accueil.
- Après signup, redirigez l'utilisateur vers la page d'accueil. (Dans le SDK Kinvey, la commande `$kinvey.User.signup()` authentifie l'utilisateur dans la foulée.)
- Si l'utilisateur est déja authentifié et qu'il se rend sur la page de login ou de signup, redirigez-le vers la page d'accueil.
- Si l'utilisateur n'est pas authentifié et qu'il se rend sur la home, redirigez-le vers la page de login.

Implémentez les **liens** suivants :
- Dans le formulaire de login, ajoutez un lien permettant d'accéder au formulaire de signup.
