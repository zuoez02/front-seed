'use strict';

define(['../app'], function(app) {

    return app.factory('service', ['dao', function(dao) {

        var service = {};
        
        service.jumpToPage2 = function () {
            dao.jump('#/page2');
        };
        
        service.jumpToPage1 = function () {
            dao.jump('#/page1');
        };
        
        service.getHello = function () {
            return dao.get('/hello');
        };

        return service;
    }]);
});
