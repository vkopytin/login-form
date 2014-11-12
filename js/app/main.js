require.config({
    baseUrl: "/js/",
    paths: {
        hogan: 'hogan-3.0.2.amd',
        underscore: 'underscore',
        backbone: 'backbone',
        jquery: 'jquery-1.11.1',
        views: 'app/views',
        models: 'app/models',
        app: 'app'
    }
});

require([
    'app'
], function (App) {
    App.initialize();
});