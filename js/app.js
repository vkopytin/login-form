define([
    'jquery',
    'underscore',
    'views',
	'models'
], function ($, _, Views, Models) {

    var initialize = function () {

		var loginModel = new Models.LoginModel({
			login: "vkopytin",
			password: "temp123"
		});
	
        var mainView = new Views.MainView({
			model: loginModel
		});
    };

    return {
        initialize: initialize
    };
});