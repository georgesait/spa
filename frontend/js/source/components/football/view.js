define([
	'backbone',
	'underscore',
	'./model',
	'text!./template.html'
],
function(Backbone, _, Model, template) {

	'use strict';

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {

			// Set model
			this.model = this.model || new Model();

			this.listenTo(this.model, 'sync', this.renderView);
		},

		render: function() {
			// Fetch Data
			this.model.getData();
		},

		renderView: function() {
			this.el.innerHTML = this.html();
		},

		html: function() {
			var data = this.model.toJSON();

			return this.template(data);
		}

	});

});