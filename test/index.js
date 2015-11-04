(function () {
  'use strict';

  angular.module('app', ['bsgrid'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        });

      $urlRouterProvider.otherwise('/');
    })
    .controller('MainController', function () {
      var vm = this;
      vm.items = [];
      for (var i = 1; i < 1000; i++)
        vm.items.push({id: i, name: 'Test ' + i})

      vm.selected = [];


      vm.options = {
        items: vm.items,
        columns: [
          { name: 'Id', field: 'id', sorted: true },
          { name: 'Name', field: 'name' }
        ],
        selectedItems: vm.selected,
        selectable: false,
        multiSelect: false,
        localStorage: true,
        lockTable: false,
        showExportButton: true,
        scope: vm
      };
    });

})();