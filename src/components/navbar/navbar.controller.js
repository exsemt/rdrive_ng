'use strict';
/*jshint esnext: true */

class NavbarCtrl {
  constructor ($scope) {
    $scope.date = new Date();

    $scope.menuItems = [
        {
          name: 'Home',
          url:  '/',
          title: 'Welcome to our Website'
        },
        {
          name: 'Photos',
          url:  '/photos',
          title: 'Your photos'
        },
        {
          name:   'Contact',
          url:    '/contact',
          title:  'Get in touch with us'
        }
    ];

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }
}

NavbarCtrl.$inject = ['$scope'];

export default NavbarCtrl;
