/**
 * bootstraps angular onto the window.document node
 */
define([
    'angular',
    'core',
    //require there css from files
    //'css!https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css',
], function (ng) {
    'use strict';
    requirejs(['domReady!'], function (document) {
        ng.bootstrap(document, ['core']);
    });
});