define([
    'underscore',
    'backbone',
    'hogan'
], function (_, Backbone, Hogan) {

    var MainView = Backbone.View.extend({
        el: $('#main-contents'),

        events: {
            'submit form': 'doSearch'
        },

        initialize: function () {
            _.bindAll(this, 'render');

            this.render();

        },

        render: function () {
            var template = Hogan.compile($('#main-template').html());

            $(this.$el).html(template.render(this.model.toJSON()));

        },

        doSearch: function (event) {
            var el = event.currentTarget;

            var tbName = $('#login');
            $('#message').html(tbName.val());

            return false;
        }

    });

    return MainView;
});