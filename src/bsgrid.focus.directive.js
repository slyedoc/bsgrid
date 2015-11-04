(function () {
  'use strict';


  angular
    .module('bsgrid')
    .directive('bsgridAutoFocus', BSGridAutoFocus);

   function BSGridAutoFocus($timeout) {
     return {
       restrict: 'AC',
       link: function (_scope, _element) {
         $timeout(function () {
           _element[0].focus();
         }, 0);
       }
     }
   }



})();
