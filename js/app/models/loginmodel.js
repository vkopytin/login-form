define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var LoginModel = Backbone.Model.extend({
        urlRoot: '/api/signup',

    });
    
    return LoginModel;
});