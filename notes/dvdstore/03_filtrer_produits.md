DVD Store - Filtrer les produits
================================

**Dans le contrôleur :**

- Créez un contrôleur `productListCtrl` (fichier `controllers/productListCtrl.js`) dédié à la liste des produits.
- Dans le contrôleur, créez une variable `selectedCategory` contenant la catégorie en cours.
- Dans le contrôleur, créez une méthode `selectCategory()` qui modifie la catégorie en cours.

**Dans la vue :**

- Chargez le fichier JS du nouveau contrôleur avec une balise `<script>`.
- Appliquez le contrôleur à une balise qui contient la liste des catégories.
- Déclenchez un appel à `selectCategory()` à chaque fois qu'une catégorie est cliquée. Pour que la catégorie **apparaisse comme sélectionnée**, il faut maintenant allumer la catégorie en cours et filtrer la liste des produits.
  - **Allumer la catégorie en cours :** appliquez la directive `ng-class` aux boutons de catégories pour appeler une méthode qui renverra la classe `btn-primary` si le bouton correspond à la catégorie en cours, et une chaîne vide sinon.
  - **Filtrer la liste des produits :** appliquez une fonction de filtrage personnalisée à la liste des produits (`ng-repeat="item in data.products | filter:myFilterFn"`), cette fonction renvoyant `true` si le produit qu'on lui passe en paramètre appartient à la catégorie en cours ou si l'on est sur la home.
