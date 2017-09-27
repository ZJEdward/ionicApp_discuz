/**
 * Created by edward on 2017/9/27.
 */
angular.module('starter.controllers', [])

    .controller('HomeCtrl', function ($scope) {
        $scope.name = 'HomeCtrl';
    })

    .controller('ThreadCtrl', function ($scope) {
        $scope.name = 'ThreadCtrl';
    })

    .controller('ArticleCtrl', function ($scope) {
        $scope.name = 'ArticleCtrl';
    })

    .controller('UserCtrl', function ($scope) {
        $scope.name = 'UserCtrl';
    });