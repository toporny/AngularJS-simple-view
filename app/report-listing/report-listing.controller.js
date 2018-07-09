(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('ReportListingController', ReportListingController);  

    ReportListingController.$inject = ['$http', '$state', 'api'];


    function ReportListingController($http, $state, api) {


        var vm = this;
        vm.goToDetailReport = goToDetailReport;
        vm.sortBy = sortBy;
        vm.yearchange = yearchange;
 

        function  goToDetailReport(id, year) {
            switch (id) {
                case 245:
                    console.log('Mobile Data Devices (245)');
                    $state.go('mobile-data', {raport_id: id, month: '08', year: '2017'}); // month hardcoded!
                break;
                case 41:
                    console.log('Landline Accounts (41)');
                    $state.go('landline-accounts', {raport_id: id, month: '08', year: '2017'}); // month hardcoded!
                break;
            }
        }

        function  yearchange(msg) {
            vm.filteredRaports = api.parseFilteredRaports(vm.availableRaports, msg.value);
        }

        

        function sortBy(propertyName) {
            vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
            vm.propertyName = propertyName;
        };


        var years = [ 
            { label: 'all years', value: '0'  },
        ];


        vm.reverse = true;
        vm.propertyName = 'name';
        vm.years = years,
        vm.periodSelected = years[0],

        api.getJsonData('/api/reports.json')
            .then(function(response) {
                vm.years = api.parseYears( years, response);
                vm.availableRaports = api.parseAvailableRaports(response);
                vm.filteredRaports = vm.availableRaports;
            })
            .catch(function(response) {
                alert('this is temporary ugly alert to show communication problem.');
                console.error('Gists error', response.status, response.data);
            });        

    }
    
})();