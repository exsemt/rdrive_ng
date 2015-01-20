'use strict';
/*jshint esnext: true */

/*import MainCtrl from './main/main.controller';*/
import NavbarCtrl from '../components/navbar/navbar.controller';
import RootCtrl from './controllers/root.controller';
import PhotosCtrl from './controllers/photos.controller';

angular.module('rdriveNg', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ui.bootstrap'])
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('RootCtrl', RootCtrl)
  .controller('PhotosCtrl', PhotosCtrl)

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/root/index.html',
        controller: 'RootCtrl'
      })
      .when('/photos', {
        templateUrl: 'app/partials/photos/index.html',
        controller: 'PhotosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
