'use strict';
/*jshint esnext: true */

class PhotosCtrl {
  constructor ($scope) {
    $scope.photos =
    [
      {"id": "1", "name": "Bild", "src": "http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg" },
      {"id": "2", "name": "Bild", "src": "http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg" },
      {"id": "3", "name": "Bild", "src": "http://fc02.deviantart.net/fs9/i/2006/066/6/6/muscle_Car_by_ArcAngelTyrael.jpg" }
    ]
  };
}

PhotosCtrl.$inject = ['$scope'];

export default PhotosCtrl;
