'use strict';

define([], function(utils, $) {
    return ['$scope', 'service', function($scope, service) {
            $scope.title = 'this is controller2';
            
            $scope.jumpToPage1 = function () {
                service.jumpToPage1();
            };
            
            function init() {
                service.getHello().then(function(data) {
                    $scope.hello = data;
                });
            }
            
            init();

            $scope.$apply();
        },
    ];
});