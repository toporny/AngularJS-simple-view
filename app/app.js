(function() {

    'use strict';

    angular
        .module('authApp', ['ui.router' ])
        .config(function($stateProvider, $urlRouterProvider ) {

            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/report-listing');
            
        });
})();