/**
 *
 */
'use strict';

(function () {

  angular.module('addressBookApp', ['ngRoute'])

    .config(function($routeProvider) {
      $routeProvider
        .when('/contacts', {
          templateUrl: 'views/contactList.html',
          controller: 'contactListCtrl'
        })
        .when('/new', {
          templateUrl: 'views/contactForm.html',
          controller: 'contactFormCtrl'
        })
        .when('/contact/:contactId', {
          templateUrl: 'views/contactView.html',
          controller: 'contactViewCtrl'
        })
        .otherwise({
          redirectTo: '/contacts'
        });
    })

    .constant('contactsUrl', 'https://api.mongolab.com/api/1/databases/formation2/collections/contacts')
    .constant('apiKey', 'ISXsR31X7VQjheVFt3rAMLTMrr0EXu89')

    // Ajoute automatiquement le paramètre ?apiKey=MONGOLAB_API_KEY pour les URLs Mongolab.
    .config(function ($httpProvider, apiKey) {
      $httpProvider.interceptors.push(function () {
        return {
          request: function (config) {
            if (config.url.indexOf('https://api.mongolab.com') === 0) {
              config.params = config.params || {};
              config.params.apiKey = apiKey;
            }
            return config;
          }
        };
      });
    })

    .factory('ContactDB', function($http, contactsUrl) {
      return {
        getContacts: function() {
          return $http.get(contactsUrl);
        },
        getContactById: function(contactId) {
          return $http.get(contactsUrl + '/' + contactId);
        },
        saveContact: function(contact) {
          if (contact._id && contact._id.$oid) {
            // Met à jour le contact
            var contactData = angular.copy(contact),
                contactId = contactData._id.$oid;
            delete contactData._id.$oid;
            return $http.put(contactsUrl + '/' + contactId, contactData);
          }
          else {
            // Crée le contact
            return $http.post(contactsUrl, contact);
          }
        },
        deleteContact: function(contactId) {
          return $http.delete(contactsUrl + '/' + contactId);
        },
      };
    })

    .controller('contactListCtrl', function($scope, ContactDB) {
      ContactDB.getContacts().success(function(data) {
        $scope.contacts = data;
      });

      $scope.deleteContact = function(contact) {
        ContactDB.deleteContact(contact._id.$oid).success(function() {
          var index = $scope.contacts.indexOf(contact);
          $scope.contacts.splice(index, 1);
        });
      };

    })

    .controller('contactFormCtrl', function($scope, $location, ContactDB) {

      $scope.saveContact = function(contact) {
        ContactDB.saveContact(contact).success(function() {
          $location.path('/contacts');
        });
      };

    })

    .controller('contactViewCtrl', function($scope, $routeParams, ContactDB) {
      var contactId = $routeParams.contactId;
      ContactDB.getContactById(contactId).success(function(contact) {
        $scope.contact = contact;
      });
    })

    .directive('twitterTimeline', function() {
      return {
        restrict: 'E',
        template: '<div id="twitter_timeline"></div>',
        link: function(scope, iElement, iAttrs) {
          window.twttr.widgets.createTimeline(
          // ID d'un Timeline Widget
          // A créer manuellement via votre le site Twitter.com : https://twitter.com/settings/widgets
          '539117840067211265',
          // Elément HTML où afficher le widget.
          document.getElementById('twitter_timeline'),
          // Options du widget
          {
            width: '450',
            height: '500',
            chrome: 'noheader nofooter noborders',
            screenName: iAttrs.screenName,
            tweetLimit: iAttrs.tweetLimit
          });
        }
      };
    });

})();

