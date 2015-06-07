DVD Store - Afficher les produits
=================================

**Dans le contrôleur :**

- Créez un contrôleur appelé `dvdStoreCtrl` dans son propre fichier `controllers/dvdStoreCtrl.js`. Ce contrôleur doit appartenir au module `dvdStore` créé précédemment.
- Utilisez le service `$http` pour récupérer les données depuis l'URL https://api.mongolab.com/api/1/databases/formation/collections/products?apiKey=ISXsR31X7VQjheVFt3rAMLTMrr0EXu89
- Exposez les données à la vue :<br/>`$scope.data = { products: LES_DONNEES_ICI };`

**Dans la vue (page HTML) :**

- Chargez le fichier JS du contrôleur avec une balise `<script>`.
- Appliquez le contrôleur à la balise `<body>`.
- Utilisez le HTML contenu dans [product.html](html/product.html) pour afficher les produits dans la zone marquée "Emplacement Produits", avec quelques adaptations :
  - Répétez la `<div>` d'un produit autant de fois qu'il y a de produits à afficher grâce à `ng-repeat`.
  - Insérez les données produit fournies par AngularJS aux endroits appropriés dans le template, avec la syntaxe `{{item.name}}` (par exemple).
- Ajoutez le filtre `currency` pour formater le prix des DVDs en euros.<br/>Syntaxe du filtre : `{{ expression | currency : symbol : fractionSize}}`
