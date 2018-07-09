(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('landline-accounts', {
                url: '/landline-accounts',
                templateUrl: '../app/landline-accounts/landline-accounts.html',
                controller: 'LandlineAccountsController as landlineAccounts',
                params: {
                    raport_id: null,
                    month: null,
                    year: null
                }
            })
    }
})();
