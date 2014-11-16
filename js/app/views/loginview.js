define([
    'underscore',
    'backbone',
    'hogan',
    'text!views/loginview.tpl.html'
], function (_, Backbone, Hogan, template) {

    var LoginView = Backbone.View.extend({

        events: {
            'submit form': 'doLogin'
        },

        initialize: function () {
            _.bindAll(this, 'render');

        },

        render: function () {
            var tpl = Hogan.compile(template);

            $(this.$el).html(tpl.render(this.model.toJSON()));

        },

        showInfo: function (message) {
            $('#message').html(message);
        },

        doLogin: function (event) {
            var self = this;
            event.preventDefault();

            self.showInfo("Logging in...");

            var el = event.currentTarget;

            var tbLogin = $('#login');
            var tbPassword = $('#password');
            var login = self.model.save({
                login: tbLogin.val(),
                password: tbPassword.val()
            }, {
                type: 'POST',
                success: function (model, resp, options) {
                    self.showInfo(JSON.stringify(resp));
                },
                error: function (message) {
                    $('#message').html(message);
                }
            });

            return false;
        }

    });

    return LoginView;
});