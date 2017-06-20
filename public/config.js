require.config({
    paths: {
        'domReady': '../bower_components/domReady/domReady',
        angular: '../bower_components/angular/angular.min',
        jquery: '../bower_components/jquery/dist/jquery.min',
        text: '../bower_components/requirejs-plugins/lib/text',
        json: '../bower_components/requirejs-plugins/src/json',
        css: '../bower_components/require-css/css.min',
        start: './bootstrap',
        core: 'widgets/core/core',
        //requiere there your bower components
    },
    shim: {
        'angular': { 'exports': 'angular' }
    },
    // kick start application
    deps: ['start']
});
