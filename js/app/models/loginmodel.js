define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var LoginModel = Backbone.Model.extend({
        urlRoot: '/api/signup/login.json',

    });
    
    return LoginModel;
});