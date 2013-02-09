define(function(require, exports, module) {

	var 
		$ = require('jquery'),
		UWAP = require('uwap-core/js/core');

	var pushNotification = window.plugins.pushNotification;

	var Push = function() {

		this.register();

	} 

	window.onNotificationAPN = function () {

	}

	Push.prototype.register = function(e) {
		pushNotification.register(function(token) {
				console.log("Registered with token " + token);
			}, 
			function() {
				console.log("Error registering...");
			}, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"}
		);
		console.log("Reigster completed...")
	}

	Push.prototype.successHandler = function(result) {
		alert('result = '+result)
	}
	Push.prototype.tokenHandler = function(result) {
		// Your iOS push server needs to know the token before it can push to this device
		// here is where you might want to send it the token for later use.
		console.log("Device token", result);
		alert('device token = ' + result);
	}

	return Push;

});

