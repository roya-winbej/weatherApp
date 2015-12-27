'use strict';

angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, location, weather) {

    var icons = {
      '01': 'icon-sun',
      '02': 'icon-cloudy',
      '03': 'icon-cloud',
      '04': 'icon-cloudy2',
      '09': 'icon-rainy',
      '10': 'icon-rainy',
      '11': 'icon-lightning',
      '13': 'icon-snowy'
    };

    location.getLocation(function (res) {

      var loc = res.data.loc.split(',');
      var lat = loc[0];
      var lon = loc[1];

      $scope.region = res.data.region;

      weather.getWeather(lat, lon, function (res) {

        var data = res.data;

        $scope.icon = icons[data.weather[0].icon.substr(0, 2)];
        $scope.city = data.name;
        $scope.temp = data.main.temp;
        $scope.description = data.weather[0].description;

      });
    });


  });
