define([
    'jquery',
    'underscore',
    'views/mainview',
    'models/loginmodel'
], function ($, _, MainView, LoginModel) {

    var initialize = function () {

        var loginModel = new LoginModel({
            login: "vkopytin",
            password: "temp123"
        });
    
        var mainView = new MainView({
            model: loginModel
        });
    };

    return {
        initialize: initialize
    };
});