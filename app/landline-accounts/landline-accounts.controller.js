(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('LandlineAccountsController', LandlineAccountsController);  


    LandlineAccountsController.$inject = ['$http', '$state', 'api', '$stateParams'];

    function LandlineAccountsController($http, $state, api, $stateParams) {

        var vm = this;
        vm.sortBy = sortBy;
        vm.goBack = goBack;
        

        if (($stateParams.month != null) || ($stateParams.year != null) || ($stateParams.raport_id != null)) {
            var filename = 'api/reports/'+$stateParams.raport_id+'-'+$stateParams.year+$stateParams.month+'.json';
            console.log ('filename', filename);
            api.getJsonData(filename)
                .then(function(response) {
                   console.log(response);
                   vm.data = api.parseAccountData(response);
                })
                .catch(function(response) {
                    alert('this is temporary ugly alert to show communication problem.');
                    console.error('error', response.status, response.data);
                });        
        }
        else {
            goBack();
        }


        function sortBy(propertyName) {
            vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
            vm.propertyName = propertyName;
        };

        
        function goBack() {
            $state.go('report-listing'); 
        };

        vm.reverse = true;
        vm.propertyName = 'physical';

    }
    
})();