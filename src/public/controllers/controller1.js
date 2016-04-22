'use strict';

define([], function(utils, $) {
    return ['$scope', function($scope) {
            $scope.title = 'this is controller1';

            $scope.$apply();
        },
    ];
});