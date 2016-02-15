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
		},

		renderView: function() {
			this.el.innerHTML = this.html();
		},

		html: function(data) {
			return this.template(data);
		}

	});

});