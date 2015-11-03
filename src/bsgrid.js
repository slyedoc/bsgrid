angular.module('bsgrid', ['angular-loading-bar'])
    .config(function (localStorageServiceProvider) {

        //Set local storage
        localStorageServiceProvider.setPrefix('bsgrid');
    });