'use strict';
(function(){
    var componentName = 'period',
        templateUrl = 'period-select.tpl.html';

    angular.module('authApp')
        .directive(componentName, component)

    component.$inject = [ ];

    function accController () {
        //var vm = this;
    }

    function component() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            bindToController: {
              years: '=',
              selected: '=',
              yearchange : '&' 
            }, 
            templateUrl: '../app/common/period.directive.template.html',
            controller: accController,
            controllerAs: 'vm'
        };
    }

  })();
