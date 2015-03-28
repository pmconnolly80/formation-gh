/** global angular **/
'use strict';

(function () {

  var model = {
    user: 'Vince',
    episodes: []
  };

  angular.module('myApp', [])

    .controller('seriesCtrl', function($scope, $http) {

      // var that = this;

      // Publie les données sur le scope dans une variable "data".
      $scope.data = model;
      // that.data = model;

      $http.get('series_tv.json').success(function (data) {
        $scope.data.episodes = data;
        // that.data.episodes = data;
      });

      $scope.newSeries = {};
      $scope.sortVar = '';

      // Publie une méthode sur le scope dans une variable "episodesRestants".
      $scope.episodesRestants = function() {
        var episode,
            nbNonVus = 0;
        for (var i=0; i < $scope.data.episodes.length; i++) {
          episode = $scope.data.episodes[i];
          if (!episode.watched) {
            nbNonVus++;
          }
        }
        return nbNonVus;
      };

      $scope.bientotFini = function() {
        var episodesRestants = $scope.episodesRestants();
        if (episodesRestants >= 5) {
          return 'label-success';
        }
        else if (episodesRestants >= 3) {
          return 'label-warning';
        }
        else {
          return 'label-danger';
        }
      };

      $scope.ajouteEpisode = function(newSeries) {
        if (newSeries) {
          $scope.data.episodes.push(newSeries);
          $scope.newSeries = {};
        }
      };

    });

})();

