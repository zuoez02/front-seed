'use strict';

define([
	'angular',
	'angularRoute',
	'routes/route',
], function(angular, angularRoute) {
    // Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute', 'myApp.example'
	]).
	config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/page1'});
	}]).factory('dao', ['$http', '$q', '$window', function ($http, $q, $window) {
            var formatParams = function (params) {
                if (params) {
                    if (typeof params === 'object') {
                        params = JSON.stringify(params);
                    } else if (typeof params === 'string') {
                        try {
                            var json = JSON.parse(params);
                        } catch (e) {
                            alert('第二个参数必须为json字符串!');
                            throw e;
                        }
                    }
                }
                return params;
            };

            var request = function (method, url, params, errorDesc) {
                var deferred = $q.defer();
                params = formatParams(params);
                $http[method](url, params).success(function (data) {
                    deferred.resolve(data);
                }).error(function (errorDesc) {
                    messenger.error('操作失败');
                    deferred.reject(errorDesc);
                });
                return deferred.promise;
            };

            return {
                'get': function (url, errorDesc) {
                    return request('get', url, null, errorDesc);
                },
                'post': function (url, params, errorDesc) {
                    return request('post', url, params, errorDesc);
                },
                'add': function (url, params, errorDesc) {
                    return this.post(url, params, errorDesc);
                },
                'update': function (url, params, errorDesc) {
                    return request('put', url, params, errorDesc);
                },
                'delete': function (url, errorDesc) {
                    return request('delete', url, null, errorDesc);
                },
                'jump': function (url) {
                    $window.location.href = url;
                },
                'open': function (url) {
                    $window.open(url);
                },
                'goback': function () {
                    $window.history.back();
                }
            };
        }]);
});

