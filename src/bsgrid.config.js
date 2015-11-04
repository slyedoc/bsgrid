(function () {
  'use strict';

  angular
    .module('bsgrid')
    .config(config);

  /** @ngInject */
  function config(localStorageServiceProvider) {

    //Set local storage
    localStorageServiceProvider.setPrefix('bsgrid');

  }

})();
