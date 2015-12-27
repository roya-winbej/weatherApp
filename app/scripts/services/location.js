'use strict';

angular.module('weatherApp')
  .service('location', function ($http) {
    this.getLocation = function (cb) {
      $http.get('http://ipinfo.io').then(cb);
    };
  });
