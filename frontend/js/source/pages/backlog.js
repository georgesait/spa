define([
	'backbone',
	'../components/backlog/view'
],
function(Backbone, BacklogView) {

	'use strict';

	return Backbone.View.extend({

		initialize: function() {

			// Set View
			this.view = new BacklogView({ el: '[data-component=main]' });
		},

		render: function() {
			this.view.render();

			return this;
		}

	});

});
