'use strict';

angular
  .module('weatherApp', [])
    .constant('API',
      {'key': '4e3855b13f89dcf9e98ede6a07e583be',
       'url': 'http://api.openweathermap.org/data/2.5/weather?'});
