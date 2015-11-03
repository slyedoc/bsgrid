
// souce from http://stackoverflow.com/questions/14846836/insert-an-angular-js-template-string-inside-an-element
angular.module('bsgrid').directive('bsGridCellTemplate', function ($compile) {
    return {
        scope: true,
        link: function (scope, element, attrs) {
            var el;

            attrs.$observe('bsGridCellTemplate', function (tpl) {
                if (angular.isDefined(tpl)) {
                    // compile the provided template against the current scope
                    el = $compile(tpl)(scope);

                    // stupid way of emptying the element
                    element.html('');

                    // add the template content
                    element.append(el);
                }
            });
        }
    };
});