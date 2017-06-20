define([
    'angular',
    'json!widgets/core/config.json',
    'css!widgets/core/main.css'
    //import here paths of your directives
], function (angular, json) {
    angular.module('core', [])
        .controller('coreController', ['$scope',function ($scope) {
        }])
        .directive('theCore', function () {
            return {
                restrict: 'A',
                templateUrl: '/widgets/core/core.html',
                controller: 'coreController'
            }
        });
});