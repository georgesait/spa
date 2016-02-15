define([
	'backbone',
	'../components/football/view'
],
function(Backbone, FootballView) {

	'use strict';

	return Backbone.View.extend({

		initialize: function() {

			// Set View
			this.view = new FootballView({ el: '[data-component=main]' });
		},

		render: function() {
			this.view.render();

			return this;
		}

	});

});
