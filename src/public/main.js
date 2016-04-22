require([
    'angular',
    'app',
    'services/service',
], function (angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        // bootstrap the app manually
        angular.bootstrap(document, ['myApp']);
    });
});
