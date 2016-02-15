define([
	'backbone',
	'eventbus',
	'./router',
	'./shared'
], function(Backbone, EventBus, Router, SharedView) {

	'use strict';

	return {

		start: function() {
			var app = {};

			app = new Router();
			app.shared = new SharedView().render();

			// Start Backbone app
			Backbone.history.start({
				pushState: true,
				hashChange: false,
				root: '/'
			});

			// Listen for nav clicks
			EventBus.on('navigate', this.onNavigate);

			// Listen for history changes
			window.addEventListener('popstate', this.onPopstate, false);
		},

		onNavigate: function(e) {
			var url = e.currentTarget.pathname,
				navigated = Backbone.history.navigate(url, true);

			// When history navigate didnt do anything
			// http://stackoverflow.com/questions/14526752/backbone-refresh-the-same-route-path-for-twice/25777550#25777550
			if (navigated === undefined) {
				Backbone.history.loadUrl(url);
			}
		},

		onPopstate: function(e) {
			EventBus.trigger('history:change', e);
		}

	};

});