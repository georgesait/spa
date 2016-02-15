// Load the config, then load the app logic for this page.
define([
	'requireConfig'
],
function() {

	'use strict';

	require([
		'./app/app'
	], function(App) {

		// Fire off the Application
		App.start();

	});

});