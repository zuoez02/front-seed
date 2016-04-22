'use strict';

define([
    'angular',
    'angularRoute',
], function(angular) {
    var createCtrl = function (ctrlName) {
        return function ($scope, $injector) {
            require(['controllers/' + ctrlName], function (ctrl) {
                $injector.invoke(ctrl, this, {'$scope': $scope});
            });
        }
    };
    
    

    angular.module('myApp.example', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/page1', {
                templateUrl: '/page/page1',
                controller: 'controller1',
            }).when('/page2', {
                templateUrl: '/page/page2',
                controller: 'controller2',
            });
        },])
        // We can load the controller only when needed from an external file
        .controller('controller1', ['$scope', '$injector', createCtrl('controller1')])
        .controller('controller2', ['$scope', '$injector', createCtrl('controller2')]);
        
});
