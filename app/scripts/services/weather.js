'use strict';

angular.module('weatherApp')
  .service('weather', function (API, $http) {
    this.getWeather = function (lat, lon, cb) {
      $http.get(API.url + 'lat=' + lat + '&lon=' + lon + '&APPID=' + API.key + '&units=imperial').then(cb);
    };
  });

