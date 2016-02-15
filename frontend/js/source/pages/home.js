define([
	'backbone',
	'../components/home/view'
],
function(Backbone, HomeView) {

	'use strict';

	return Backbone.View.extend({

		initialize: function() {

			// Set View
			this.view = new HomeView({ el: '[data-component=main]' });
		},

		render: function() {
			this.view.render();

			return this;
		}

	});

});
