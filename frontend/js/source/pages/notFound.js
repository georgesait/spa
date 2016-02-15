define([
	'backbone',
	'../components/notFound/view'
],
function(Backbone, NotFoundView) {

	'use strict';

	return Backbone.View.extend({

		initialize: function() {

			// Set View
			this.view = new NotFoundView({ el: '[data-component=main]' });
		},

		render: function() {
			this.view.render();

			return this;
		}

	});

});
