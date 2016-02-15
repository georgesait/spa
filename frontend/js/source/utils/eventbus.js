// Event bus
// http://lostechies.com/derickbailey/2012/04/03/revisiting-the-backbone-event-aggregator-lessons-learned/
define([
	'underscore',
	'backbone'
],
function(_, Backbone) {

	'use strict';

	return _.extend({}, Backbone.Events, { cid: 'dispatcher' });

});