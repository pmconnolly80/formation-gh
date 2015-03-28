Quoi de neuf dans Angular 1.3 ?
===============================

Introduction
------------

AngularJS version 1.3 contains many useful new features, several enhancements to existing features, and a few breaking changes. This course highlights the key changes in Angular version 1.3.

Why should I care about 1.3?

- Better performance
- New features: simple and more full-featured APIS gives you more features with less code; more control over forms, validation messages, models, controllers and directives
- Productivity improvements

What Am I Losing?

- Discontinues support for IE8
- No support for jQuery <  2.1.1
- Removes ability to use global functions as controllers by default


One-time binding // Bind-once bindings
----------------

http://plnkr.co/edit/g2h3mEn0JNDSjLM34CFD

Allows you to improve performance and save on resources by turning a two-way binding into a one-time binding. This means that Angular no longer has to worry about whether or not that binding gets out of date and update it.

{{::class.className}}
ng-repeat="class in ::classes" -- Doesn't change all the bindings with the ng-repeat into one-time bindings

Also in a custom directive attribute:
<class-display name="::class.className"></class-display>


Disabling Scope Info
--------------------

By default AngularJS attaches information about binding and scopes to DOM nodes, and adds CSS classes to data-bound elements. Tools like Protractor and Batarang need this information to run, but you can disable this in production for a significant performance boost with:

myApp.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);


ngAria
------

Just by including the ngAria module (and making it a dependency of the application), ARIA attributes are added to the HTML.


Global Functions as Controllers
-------------------------------

One of the more notable changes that Angular 1.3 has brought is the removal of global functions as controllers. (This feature was only ever meant for demo projects.)


angular.forEach Signature Change
--------------------------------

Dans :

  angular.forEach(obj, iterator, [context]);

The iterator function is invoked with iterator(value, key, obj), where value is the value of an object property or an array element, key is the object property key or array element index and obj is the obj itself. The third parameter `obj` is new.


Strict DI Mode
--------------

Force code annotation by causing AngularJS to fail anytime an injectable function hasn't been annotated.

To enable strict di mode, you have two options:

<div ng-app="myApp" ng-strict-di>
  <!-- your app here -->
</div>
or

angular.bootstrap(document, ['myApp'], {
  strictDi: true
});
