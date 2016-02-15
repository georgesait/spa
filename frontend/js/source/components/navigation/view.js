define([
	'backbone',
	'underscore',
	'eventbus',
	'text!./template.html'
],
function(Backbone, _, EventBus, template) {

	'use strict';

	return Backbone.View.extend({

		template: _.template(template),

		events: {
			'click [data-js-hook=nav-link]': 'onNavClick'
		},

		initialize: function() {

			// Event Listener
			this.listenTo(EventBus, 'history:change', this.render);
		},

		render: function() {
			this.renderView();

			if (!this.btnMatchesLocation()) {
				this.toggleActive(this.targetUrl());
			}

			return this;
		},

		renderView: function() {
			this.el.innerHTML = this.html();
		},

		// Toggle active state and trigger to Backbone.history.navigate
		onNavClick: function(e) {
			e.preventDefault();

			this.toggleActive(e.currentTarget);

			EventBus.trigger('navigate', e);
		},

		html: function() {
			return this.template();
		},

		toggleActive: function(target) {
			var links = document.querySelectorAll('[data-js-hook=nav-link]');

			_.each(links, function(link) {
				link.classList.remove('is-active');
			});

			// Show 404 / Not found page when target is falsy
			if (!target) {
				return;
			}

			target.classList.toggle('is-active');
		},

		// If it's the homepage, don't toggle the active state, the first buttons defaults for active
		btnMatchesLocation: function() {
			return this.el.querySelector('[data-js-hook=nav-link].is-active').href === location.origin + location.pathname;
		},

		targetUrl: function() {
			var url = location.pathname.split('/')[1],
				target = this.el.querySelector('[data-js-hook=nav-link][href*=' + url + ']');

			return target;
		}

	});

});