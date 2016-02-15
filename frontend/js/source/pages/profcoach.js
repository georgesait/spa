define([
	'backbone',
	'../components/profcoach/view'
],
function(Backbone, ProfcoachView) {

	'use strict';

	return Backbone.View.extend({

		initialize: function() {

			// Set View
			this.view = new ProfcoachView({ el: '[data-component=main]' });
		},

		render: function() {
			this.view.render();

			return this;
		}

	});

});
