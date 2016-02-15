define([
	'backbone',
	'pages/home',
	'pages/profcoach',
	'pages/football',
	'pages/backlog',
	'pages/notFound'
],
function(Backbone, Home, Profcoach, Football, Backlog, NotFound) {

	'use strict';

	return Backbone.Router.extend({

		routes: {
			// Pages
			'': 'home',
			'profcoach': 'profcoach',
			'football': 'football',
			'backlog': 'backlog',

			// 404
			'*notFound': 'notFound'
		},

		home: function() {
			this.view = new Home().render();
		},

		profcoach: function() {
			this.view = new Profcoach().render();
		},

		football: function() {
			this.view = new Football().render();
		},

		backlog: function() {
			this.view = new Backlog().render();
		},

		notFound: function() {
			this.view = new NotFound().render();
		}

	});

});