DVD Store - Afficher les catégories
===================================

Principe de fonctionnement
--------------------------

Tous nos DVDs ont une propriété `categories` qui les associe à un ou plusieurs genres : Drame, Espionnage, Thriller... L'objectif ici est d'extraire ces catégories de la liste des DVDs pour générer un menu de navigation qui permettra à l'utilisateur de filtrer les DVDs par catégorie.

D'une certaine façon, la liste des catégories est donc une *version filtrée* de la liste des produits.

Notez que dans un projet réel, on récupererait problablement la liste des catégories directement depuis une base de données. Dans notre cas, nous avons un peu simplifié les choses. Extraire les catégories depuis la liste des produits nous évite de devoir faire une requête supplémentaire au serveur et d'adapter notre base de données.

Créer le filtre (dans un module)
--------------------------------

- Créez un **nouveau module** `customFilters` (dans `filters/customFilters.js`) qui contiendra tous nos filtres personnalisés. Généralement, on crée un nouveau module quand une fonctionnalité pourra être réutilisée dans d'autres projets. (Sinon, on ajoute les fonctionnalités à un module existant.)
- Dans le module `customFilters`, créez un filtre maison avec ces caractéristiques :
  - Nom : `unique`
  - Fonctionnement : reçoit une liste de produits en entrée et renvoie la liste des catégories de ces produits en sortie. Il faut donc parcourir la liste des produits et extraire les catégories de chaque produit.
  - Attention : certaines catégories vont apparaître plusieurs fois, votre filtre ne doit renvoyer chaque catégorie **qu'une seule fois** ; il doit également classer les filtres dans l'ordre alphabétique.
  - Basez-vous sur la [documentation des filtres](https://code.angularjs.org/1.3.3/docs/guide/filter#creating-custom-filters) pour la syntaxe d'un filtre.
- N'oubliez pas de référencer ce nouveau fichier JS depuis une balise `<script>` dans la page HTML et de **déclarer ce nouveau module comme dépendance du module principal `dvdStore`.**

Utiliser le filtre (dans la vue)
--------------------------------

Une fois le filtre `unique` créé, vous êtes prêt à l'utiliser dans le template :
- Supprimez le texte qui dit "Emplacement Catégories" pour le remplacer par la liste des catégories.
- Utilisez le markup dans le fichier [category.html](html/category.html) pour afficher une catégorie. Il faudra l'adapter de sorte que la balise `<a>` soit répétée autant de fois qu'il y a de catégories. **N'oubliez pas que les catégories sont en réalité la liste des produits filtrée par notre filtre maison `unique`.**
- Ajoutez au-dessus de la liste des catégories un bouton spécial pour retourner à l'accueil (quand aucune catégorie n'est sélectionnée) : `<a class="btn btn-block btn-default btn-lg">Accueil</a>`

Amélioration facultative
------------------------

- Notre filtre custom pourrait accepter un argument supplémentaire `propertyName` (en plus des données à filtrer) permettant de préciser le nom de la propriété sur laquelle filtrer l'unicité (ici, `categories`). Cette solution est plus flexible que de coder en dur la propriété ; ça rend le filtre ré-utilisable.
