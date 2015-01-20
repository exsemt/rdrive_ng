'use strict';
/*jshint esnext: true */

class RootCtrl {
  constructor ($scope) {
    $scope.categories = [
      {
        'title': 'Photos',
        'url': '#/photos',
        'description': 'Your photos',
        'logo': 'browsersync.png'
      },
      {
        'title': 'Something',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'angular.png'
      },
      {
        'title': 'Something',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'angular.png'
      }
    ];
    /*$scope.awesomeThings.forEach(function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });*/
  }
}

RootCtrl.$inject = ['$scope'];

export default RootCtrl;
