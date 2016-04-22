'use strict';

require.config({
  baseUrl: './',
  removeCombined: false,
  paths: {
    angular: 'bower_components/angular/angular',
    angularRoute: 'bower_components/angular-route/angular-route',
    angularMocks: 'bower_components/angular-mocks/angular-mocks',
  },
  shim: {
    angular: { exports: 'angular' },
    angularRoute: ['angular'],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock',
    },
  },
  priority: [
    'angular',
  ],
});

require(['main']);
