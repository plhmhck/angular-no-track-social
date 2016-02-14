"use strict";

angular.module('angular.no.track.social').factory('popUpService', ['$window', function ($window) {
    return {
        popup: function (url) {
            $window.open(url, '', "top=20,left=20,width=400,height=500");
        }
    };
}]);

angular.module('angular.no.track.social').directive('tweet', ['popUpService', function (popUpService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            class: '@class',
            url: '@url',
            text: '@text',
            via: '@via',
            linktext: '@linktext'
        },
        controller: ['$scope', function ($scope) {
            $scope.popup = function () {
                var urlToShare = encodeURIComponent($scope.url);
                var shareUrl = "https://twitter.com/intent/tweet?url=" + urlToShare;
                if ($scope.via) {
                    shareUrl += "&via=" + $scope.via;
                }
                if($scope.text) {
                    shareUrl += "&text=" + $scope.text;
                }
                popUpService.popup(shareUrl);
            };
        }],
        template: '<a class={{class}} href="" ng-click="popup()" ng-transclude></a>'
    };
}]);

angular.module('angular.no.track.social').directive('facekbookshare', ['popUpService', function (popUpService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            class: '@class',
            url: '@url',
            imageUrl: '@image',
            linktext: '@linktext'
        },
        controller: ['$scope', function ($scope) {
            $scope.popup = function () {
                var urlToShare = encodeURIComponent($scope.url);
                var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + urlToShare;
                if ($scope.imageUrl) {
                    shareUrl = shareUrl + "&images0=" + encodeURIComponent($scope.imageUrl);
                }

                popUpService.popup(shareUrl);
            };
            //$scope.shareUrl = "https://www.facebook.com/sharer/sharer.php?angular.no.track.social_id=616927995042097&u=" + $scope.url;
        }],
        template: '<a class={{class}} href="" ng-click="popup()" ng-transclude>{{linktext}}</a>'
    };
}]);

angular.module('angular.no.track.social').directive('gpluskshare', ['popUpService', function (popUpService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            class: '@class',
            url: '@url',
            linktext: '@linktext'
        },
        controller: ['$scope', function ($scope) {
            $scope.popup = function () {
                var urlToShare = encodeURIComponent($scope.url);
                var shareUrl = "https://plus.google.com/share?url=" + urlToShare;
                popUpService.popup(shareUrl);
            };
        }],
        template: '<a class={{class}} href="" ng-click="popup()" ng-transclude>{{linktext}}</a>'
    };
}]);