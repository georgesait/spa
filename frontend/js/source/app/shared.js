define([
	'backbone',
	'../components/navigation/view'
],
function(Backbone, NavigationView) {

	'use strict';

	return Backbone.View.extend({

		initialize: function() {

			this.views = {
				navigation: new NavigationView({el: '[data-component=navigation]'})
			};
		},

		render: function() {

			// Render subviews
			Object.keys(this.views).forEach(function(key) {
				this.views[key].render();
			}, this);

			return this;
		}

	});

});