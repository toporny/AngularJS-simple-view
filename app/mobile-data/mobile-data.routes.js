(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('mobile-data', {
                url: '/mobile-data',
                templateUrl: '../app/mobile-data/mobile-data.html',
                controller: 'MobileDataController as mobileData',
                params: {
                    raport_id: null,
                    month: null,
                    year: null
                }
            })
    }
})();
