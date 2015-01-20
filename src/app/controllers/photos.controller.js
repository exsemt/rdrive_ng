'use strict';
/*jshint esnext: true */

class PhotosCtrl {
  constructor ($scope) {
    $scope.photos = [
      {
        'title': 'Photo',
        'url': 'http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg',
        'description': 'Your photos'
      },
      {
        'title': 'Photo',
        'url': 'http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg',
        'description': 'Photo description'
      },
      {
        'title': 'Photo',
        'url': 'http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg',
        'description': 'Photo description'
      },
      {
        'title': 'Photo',
        'url': 'http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg',
        'description': 'Photo description'
      }
    ];
  }
}

PhotosCtrl.$inject = ['$scope'];

export default PhotosCtrl;
