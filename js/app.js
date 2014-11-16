define([
    'jquery',
    'underscore',
    'views/mainview'
], function ($, _, MainView) {

    var initialize = function () {
    
        var mainView = new MainView({
            el: $('#main-contents'),
        });

        mainView.render();
    };

    return {
        initialize: initialize
    };
});