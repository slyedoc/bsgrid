/**
 * Created by towlesj on 11/3/2015.
 */
angular.module('app', ['bsgrid'])
    .controller('simple', function () {
        var vm = this;
        vm.items = [
            {id: 1, name: 'Test 1'},
            {id: 1, name: 'Test 2'}
        ];

        vm.options = {
            items: vm.items,
            columns: [
                {
                    name: 'Name',
                    field: 'name',
                    sorted: true
                }
            ],
            selectable: false,
            multiSelect: false,
            localStorage: true,
            lockTable: false,
            showExportButton: true,
            scope: vm
        };
    });