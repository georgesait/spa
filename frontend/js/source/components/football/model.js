define([
	'backbone'
],
function(Backbone) {

	'use strict';

	return Backbone.Model.extend({

		// footballData Api
		apiTOKEN: 'af7a22cc5dc745afa3e44d4f68a90ce1',

		// Fetch to Premier League
		url: 'http://api.football-data.org/v1/soccerseasons/398/teams',

		defaults: {
			count: 0
		},

		initialize: function() {},

		getData: function() {
			this.fetch({
				headers: { 'X-Auth-Token': this.apiTOKEN },
				dataType: 'json',
				type: 'GET'
			});
		}

	});

});