'use strict';

angular.module('weatherApp')
  .directive('weatherCity', function () {
    return {
      templateUrl: 'views/weather-city.html',
      restrict: 'E'
    };
  });
