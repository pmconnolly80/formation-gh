DVD Store - Mise en route
=========================

Préparer les données
--------------------

- Aller sur https://mongolab.com/ et créer un compte gratuit.
- Créer une nouvelle base de données (https://mongolab.com/create) avec ces paramètres :
  - Cloud Provider : Amazon's EU Region
  - Plan : Single-node / Sandbox
  - Database name : `formation`
- Dans la base de données `formation` (https://mongolab.com/databases/formation) :
  - Aller dans **Users** et créer un utilisateur de base de données, par exemple `formation` / `123456` (pas recommandé IRL !!). **NB. Notez bien le username et le password car ils vous serviront pour vous connecter à la base.**
  - Aller dans **Collections** et créer la collection `products`.
  - Importer le fichier [products_mongolab.json](data/products_mongolab.json) dans cette collection. L'onglet "Tools" de chaque collection contient des exemples de lignes de commande pour importer un fichier JSON ; l'utilitaire `mongoimport` doit être installé sur votre machine et il faut penser à adapter la commande à son propre username et password.
- Tester que les données sont accessibles via l'[API REST de MongoLab](http://docs.mongolab.com/restapi/) :
  - Visiter http://www.hurl.it/.
  - Entrer l'URL REST correspondant à la base `formation` et à la collection `products`, soit : https://api.mongolab.com/api/1/databases/formation/collections/products?apiKey=myAPIKey<br/>
    Vous trouverez votre API Key en allant dans votre compte (https://mongolab.com/account-details/) puis en cliquant sur l'utilisateur qui vous sert à accéder à Parse.com (ne pas confondre avec l'utilisateur de base de données).
  - Soumettre la requête : le serveur doit renvoyer la liste des produits.

Préparer l'application
----------------------

- Créer les sous-répertoires suivants : `controllers`, `filters`, `ngmodules`, et `views`.
- Télécharger les fichiers AngularJS et Bootstrap. En plus du noyau d'AngularJS, nous aurons besoin de deux modules AngularJS optionnels : `angular-route.js` et `angular-resource.js` (à mettre dans le répertoire `ngmodules`).
- Créer un fichier HTML [index.html](html/index.html) depuis lequel vous référencerez Bootstrap et AngularJS et dans lequel vous déclarerez une application AngularJS appelée `dvdStore`.

Tester que tout est OK
----------------------

- Vérifier dans le navigateur que la page apparaît bien avec le formatage de Bootstrap.
- Vérifier si vous tapez `{{2+2}}` dans le HTML, c'est bien `4` qui apparaît dans le navigateur.
