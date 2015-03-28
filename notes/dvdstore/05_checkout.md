DVD Store - Gérer le checkout
=============================

Copiez le HTML de [html/checkout_summary.html](html/checkout_summary.html) dans votre template `checkoutSummary.html` et implémentez les fonctionnalités suivantes :
- Créez un contrôleur `checkoutCtrl` dans le fichier `controllers/checkoutCtrl.js` et appliquez-le à la vue `checkoutSummary.html`.
- Faites en sorte que ce contrôleur expose à la vue :
  - Les données du panier.
  - Une méthode permettant de calculer le total du panier.
  - Une méthode permettant de retirer un article du panier.
- Dans la vue :
  - Affichez les données du panier avec un `ng-repeat`.
  - Affichez le total du panier.
  - Rendez opérationnel le bouton "Supprimer" permettant de supprimer un article du panier (votre bouton se basera sur la méthode créée à l'étape précédente).
- Ajoutez un message "Aucun produit dans votre panier. Retouner au catalogue [cliquable]." si le panier est vide.
- Cachez le tableau contenant la liste des produits si le panier est vide.
- Rendez opérationnels les liens "Continuer vos achats" et "Passer commande" en bas de page. Ils doivent mener vers les routes appropriées.
