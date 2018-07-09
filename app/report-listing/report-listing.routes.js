(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('report-listing', {
                url: '/report-listing',
                templateUrl: '../app/report-listing/report-listing.html',
                controller: 'ReportListingController as reportListing'
            })
    }
})();
