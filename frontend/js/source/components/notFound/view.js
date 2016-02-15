define([
	'backbone',
	'underscore',
	'text!./template.html'
],
function(Backbone, _, template) {

	'use strict';

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {},

		render: function() {
			this.renderView();

			return this;
		},

		renderView: function() {
			this.el.innerHTML = this.html();
		},

		html: function() {
			return this.template();
		}

	});

});