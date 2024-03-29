Fondamentaux JavaScript
=======================

Variables
---------

```js
var a;
var name = "simon";
```

- Si on déclare une variable sans lui assigner de valeur, son type est `undefined`.
- En JavaScript, seules les fonctions ont un scope. Cela signifie que les variables déclarées à l'intérieur d'une fonction ne sont visibles que dans cette fonction.

Opérateurs
----------

Opérateurs numériques JavaScript : `+`, `-`, `*`, `/` et `%` (remainder).

```js
x += 5
x = x + 5
```

L'opérateur `+` est également l'opérateur de concaténation de chaîne :

```js
> "hello" + " world"
hello world
```

Opérateurs de comparaison : `<`, `>`, `<=`, `>=`, `==` et `===`.

**ATTENTION.** Ne pas confondre le test d'égalité (`a == 12`) et l'assignation d'une valeur (`a = 12`).

Structures de contrôle
----------------------

Les statements conditionnels sont supportés par `if` et `else` :

```js
var name = "kittens";
if (name == "puppies") {
  name += "!";
} else if (name == "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
```

Les boucles `for` :

```js
for (var i = 0; i < 5; i++) {
  // Sera exécuté 5 fois
}
```

Les opérateurs `&&` et `||` utilisent une **logique de court-circuit**, qui signifie que l'exécution du 2e opérande dépend du premier. Bien pratique pour tester un objet null avant d'accéder à ses attributs :

```js
var name = o && o.getName();
```

Ou pour définir des valeurs par défaut :

```js
var name = otherName || "default";
```

JavaScript possède un **opérateur ternaire** pour les expressions conditionnelles :

```js
var allowed = (age > 18) ? "yes" : "no";
```

Objets
------

**Simples collections de paires "nom-valeur".**

À cet égard, similaires aux tableaux associatifs PHP ou dictionnaires Python.

Il y a plusieurs moyens de créer un objet :

```js
var obj = new Object();
```

Et (*syntaxe littérale*) :

```js
var obj = {};

// Ou encore...

var person = {
  name: "Bob",
  age: 18
};
```

Et (*fonction constructeur*)...

```js
function Person(name, age)
{
  this.name = name;
  this.age = age;
}

// Instancie un objet
var You = new Person("You", 24);
```

Toutes ces techniques sont sémantiquement équivalentes.

Une fois créé, les propriétés d'un objet peuvent être accédées par la syntaxe "point" ou "crochets" :

```js
obj.name = "Simon";
var name = obj.name;
```

Et :

```js
obj["name"] = "Simon";
var name = obj["name"];
```

Les deux sont équivalentes. La 2ème technique est pratique quand la propriété à accéder est contenue dans une variable.

L'accès aux attributs peut être **chaîné** :

```js
> obj.details.color
> obj["details"]["size"]
```

Tableaux
--------

Créer un tableau :

```js
> var a = new Array();
> a[0] = "dog";
> a[1] = "cat";
> a[2] = "hen";
> a.length
3
```

Ou, plus pratique :
```js
> var a = ["dog", "cat", "hen"];
> a.length
3
```

Itérer sur les éléments d'un tableau :
```js
for (var i = 0; i < a.length; i++) {
  // Fais quelque chose avec a[i]
}
```

Ou, un peu plus efficace :
```js
for (var i = 0, len = a.length; i < len; i++) {
  // Fais quelque chose avec a[i]
}
```

**IMPORTANT -** Ajouter un élément à la fin d'un tableau :
```js
a.push(item);
```

**IMPORTANT -** Retirer `deleteCount` élément(s) à partir de la position `start` d'un tableau :
```js
a.splice(start, deleteCount);
```

Il est très utile de connaître les méthodes de tableau : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

Fonctions
---------

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

- Prend un nombre variable de paramètres nommés.
- Peut contenir autant de statements que souhaité.
- Peut retourner une valeur.

**Points importants (liés au développement Angular)**

1) Une fonction peut contenir des déclarations de variables (avec `var`) et même **d'autres déclarations de fonction**. Les variables et fonctions déclarées à l'intérieur d'une fonction ont un **scope local** (c. à d. ne sont visibles qu'à l'intérieur de cette fonction) :

```js
function maFonction() {
  var toto = 10;
  function autreFonction() {
    // ...
  }
}
```

`toto` et `autreFonction` sont accessibles localement, à l'intérieur de `maFonction`.

2) Il y a deux façons de déclarer une fonction : **Function Statement** et **Function Expression**

```js
// Function statement
function foo() { return 5; }

// Anonymous function expression
var foo = function() { return 5; }

// Named function expression
var foo = function foo() { return 5; }
```

Quelle différence ? La façon dont le navigateur charge ces fonctions dans le contexte d'exécution:

- Les *function statements* sont tous chargés AVANT que le moindre code soit exécuté.
- Les *function expressions* sont chargées au moment où l'interpréteur atteint la ligne de code correspondante.

CONCLUSION: Si vous appelez une function expression avant qu'elle soit chargée, vous obtiendrez une erreur. Mais si vous appelez un function statement, ça marchera toujours.

Exemple - Function Expression

```js
alert(foo()); // ERREUR: foo n'est pas encore chargé
var foo = function() { return 5; }
```

Exemple - Function Statement

```js
alert(foo()); // Affiche 5. Les statements sont chargés avant que le moindre code soit exécuté.
function foo() { return 5; }
```

Principe de callback
--------------------

Hyper répandu en JavaScript !

Concept : Une fonction accepte en paramètre une autre fonction qui sera appelée plus tard.

Exemple JavaScript :

```js
function doSomething() {
  // Do something here
}

window.setTimeout(doSomething, 1000);

// ET SURTOUT PAS :
window.setTimeout(doSomething(), 1000);  // ----- ATTENTION !! Erreur hyper répandue
                                         // Ne pas mettre de parenthèses après doSomething.
```

Les callbacks sont très souvent déclarés sous forme de **fonction anonyme** :
```js
window.setTimeout(function() {
  // Do something here
}, 1000);
```

Exemple AngularJS (combine chaînage + fonctions anonymes + callbacks) :

```js
$http.get('/someUrl')
  .success(function() {
    // ...
  })
  .error(function() {
    // ...
  });
```

Débugger dans le navigateur
---------------------------

Afficher des messages :
```js
console.log(var1, var2, ...);
```
