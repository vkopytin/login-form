define([
    'underscore',
    'backbone',
    'hogan',
    'models/loginmodel',
    'views/loginview'
], function (_, Backbone, Hogan, LoginModel, LoginView) {

    var MainView = Backbone.View.extend({

        loginView: new LoginView({
            el: $('#main-contents'),
            model: new LoginModel()
        }),

        initialize: function () {
            _.bindAll(this, 'render');

        },

        render: function () {

            this.loginView.render();
        },

    });

    return MainView;
});