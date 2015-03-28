DVD Store - Enregistrer la commande
===================================

INTRODUCTION : On pourrait créer un contrôleur dédié à notre formulaire de commande, mais cela paraît un peu "too much" uniquement pour exposer une méthode qui enregistre la commande. Puisque toutes les vues héritent du top-level contrôleur `dvdStoreCtrl`, c'est là que nous mettrons la méthode qui enregistre les commandes.

**Notons que c'est plus pour illustrer le principe d'héritage des contrôleurs que par rigueur informatique que nous procédons ainsi.**

Il faut néanmoins procéder à certaines adaptations pour que cela puisse fonctionner :

**Dans le contrôleur `dvdStoreCtrl` :**

- DI : Injecter l'URL Mongolab sur laquelle HTTP POSTer les commandes (via une constante `orderUrl`).
- DI : Injecter le service `cart` pour récupérer la liste des produits du panier.

**Sur Mongolab :**

- Créer une collection `orders` (rappel : pas nécessaire de définir un schéma !).
- L'URL REST de cette collection devrait être https://api.mongolab.com/api/1/databases/formation/collections/orders.

**Vous êtes maintenant prêt à finaliser la tâche :**

- Utiliser `$http.post(url, data, config)` pour envoyer les données à Mongolab. N'oubliez pas de passer les données à enregistrer via l'option `data` et votre clé d'API via l'option `config`. DOC : https://code.angularjs.org/1.3.3/docs/api/ng/service/$http#post
- **Que l'issue de la requête soit un succès ou un échec (`PROMISE.finally()`) :**
  - Vous stockerez un message informatif dans une variable du scope.
  - Et vous redirigerez l'utilisateur vers la route `thankyou` créée précédemment (utilisez le service `$location.path(path)` pour faire une redirection). Dans le template affiché par cette route, vous afficherez SOIT un message de succès, SOIT un message d'erreur (utiliser le html [fourni ici](html/thank_you.html)).
