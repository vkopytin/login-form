define([
    'underscore',
    'backbone',
    'hogan'
], function (_, Backbone, Hogan) {

    var MainView = Backbone.View.extend({
        el: $('#main-contents'),

        events: {
            'submit form': 'doLogin'
        },

        initialize: function () {
            _.bindAll(this, 'render');

            this.render();

        },

        render: function () {
            var template = Hogan.compile($('#main-template').html());

            $(this.$el).html(template.render(this.model.toJSON()));

        },

        doLogin: function (event) {
            event.preventDefault();
            var el = event.currentTarget;

            var tbLogin = $('#login');
            var tbPassword = $('#password');
            var login = this.model.save({
                login: tbLogin.val(),
                password: tbPassword.val()
            }, {
                success: function (res) {
                    $('#message').html(res);
                },
                error: function (message) {
                    $('#message').html(message);
                }
            });

            return false;
        }

    });

    return MainView;
});