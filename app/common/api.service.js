(function() {
  angular
    .module('authApp')
    .factory('api', api);

  api.$inject = ['$http', '$log', '$q'];

  function api($http, $log, $q) {

    // interface

    var service = {
      getJsonData:              getJsonData,
      parseYears:               parseYears,
      parseAvailableRaports:    parseAvailableRaports,
      parseFilteredRaports:     parseFilteredRaports,
      parseMobileData:          parseMobileData,
      parseAccountData:         parseAccountData,
    };


    return service;

    // functions

    function parseYears(years, response) {
        var arr = response.data.content;
        angular.forEach(arr, function(value, key) {
          years.push({value:value.modifiedDate.substr(0,4), label: value.modifiedDate.substr(0,4) });
        });
        return years;
    }




    function parseAvailableRaports(response) {
      var availableRaports = [];
      angular.forEach(response.data.content, function(value, key) {
        availableRaports.push({id:value.id, year: value.modifiedDate.substr(0,4), name:value.name, description: value.description });
      });
      return availableRaports;
    }



    function parseFilteredRaports(data, year) {
      var tmp  = [];
      
      angular.forEach(data, function(value, key) {
        if (year=='0') {
          tmp.push({id:value.id,  year: value.year, name:value.name, description: value.description });
        }
        else {
          if (year == value.year) {
            tmp.push({id:value.id,  year: value.year, name:value.name, description: value.description });
          }
        }
  
      });      
      return tmp;
    }



    function parseMobileData(response) {
      var tmp  = [];
      angular.forEach(response.data.data, function(value, key) {
          tmp.push({physical:value[0],  usagebytes: value[1]});
      });      
      return tmp;
    }



    function parseAccountData(response) {
      var tmp  = [];
      angular.forEach(response.data.data, function(value, key) {
        //console.log(value);
        tmp.push({accountid: value[0],  officelocation: value[1],  chargeseuro: value[2]});
      });      
      return tmp;
    }




    function getJsonData(filename) {
      var deferred = $q.defer();
      return $http.get(filename)
        .then(function(response) {
            deferred.resolve(response);
            // promise is returned
            return deferred.promise;
        }, function(response) {
            // the following line rejects the promise 
            deferred.reject(response);
            // promise is returned
            return deferred.promise;
        });
    }



  }
})();
