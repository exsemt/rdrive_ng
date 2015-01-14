'use strict';
/*jshint esnext: true */

/*
import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
*/

import PhotosCtrl from './photos/photos.controller';

angular.module('rdriveNg', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ngMaterial'])
/*
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  */

  .controller('PhotosCtrl', PhotosCtrl)

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/photos/photos.html',
        controller: 'PhotosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
