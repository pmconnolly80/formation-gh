DVD Store - Afficher les produits
=================================

**Dans le contrôleur :**

- Créez un contrôleur appelé `dvdStoreCtrl` dans son propre fichier `controllers/dvdStoreCtrl.js`. Ce contrôleur doit appartenir au module `dvdStore` créé précédemment.
- Exposez les données à la vue depuis le contrôleur :<br/>
  `$scope.data = { products: COPIER_COLLER_LES_DONNEES_ICI };`<br/>
  Vous trouverez les données à copier/coller dans le fichier [products.json](data/products.json).

**Dans la vue (page HTML) :**

- Chargez le fichier JS du contrôleur avec une balise `<script>`.
- Appliquez le contrôleur à la balise `<body>`.
- Utilisez le HTML contenu dans [product.html](html/product.html) pour afficher les produits dans la zone marquée "Emplacement Produits", avec quelques adaptations :
  - Répétez la `<div>` d'un produit autant de fois qu'il y a de produits à afficher grâce à `ng-repeat`.
  - Insérez les données produit fournies par AngularJS aux endroits appropriés dans le template, avec la syntaxe `{{item.name}}` (par exemple).
- Ajoutez le filtre `currency` pour formater le prix des DVDs en euros.<br/>Syntaxe du filtre : `{{ expression | currency : symbol : fractionSize}}`
