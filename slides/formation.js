/* global Reveal, hljs */
/**
 * @file
 * Custom JavaScript for the AngularJS workshop.
 */
(function () {
  'use strict';

  // Full list of configuration options available here:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    // theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    // transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
      { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
  });


  Reveal.addEventListener('ready', function( event ) {
    // Bootstrap AngularJS manually after Reveal is ready.
    angular.bootstrap(document, ['formationApp']);
  });


  angular.module('formationApp', [])

    .constant('GITHUB_REPO_URL', 'https://github.com/ngworkshop/formation-gh/tree/gh-pages')
    .constant('GITHUB_PAGES_URL', 'http://ngworkshop.github.io/formation-gh')
    .constant('LOCAL_EXOS_DEMOS', 'http://ng-playground/formation/exos_demos')

    .controller('appCtrl', function() {
      var vm = this;
    })

    /**
     * Usage:
     *   Voir <note path="intro/installation.md"></note>
     */
    .directive('note', function() {
      return {
        scope: {
          path: '@'
        },
        controller: ['$scope', 'GITHUB_REPO_URL', function($scope, GITHUB_REPO_URL) {
          $scope.url = GITHUB_REPO_URL + '/notes/' + $scope.path;
        }],
        template: '<a href="{{url}}" target="_blank">{{path}}</a>'
      };
    })

    /**
     * Usage:
     *   <solution path="dvdstore_1/listing_03.html"></solution>
     */
    .directive('solution', function() {
      return {
        scope: {
          path: '@'
        },
        controller: ['$scope', function($scope) {

        }],
        template: '<p>SOLUTION: <code>{{path}}</code></p>'
      };
    })

    /**
     * Usage:
     *   <demo path="forms/form_dynamic.html"></demo>
     */
    .directive('demo', function() {
      return {
        scope: {
          path: '@'
        },
        controller: ['$scope', 'GITHUB_PAGES_URL', function($scope, GITHUB_PAGES_URL) {
          $scope.url = GITHUB_PAGES_URL + '/demos/' + $scope.path;
        }],
        template: '<a href="{{url}}" target="_blank">{{path}}</a>'
      };
    });

})();
