require.config({

	paths: {
		// Vendor Scripts
		'jquery':					'../vendor/jquery/jquery-2.1.3.min',
		'underscore':				'../vendor/underscore/underscore',
		'backbone':					'../vendor/backbone/backbone',
		'text':						'../vendor/require/text',

		// Special Utilities
		'eventbus':					'../source/utils/eventbus'
	},

	// Use when module is not AMD
	shim: {
		/*'highstock': {
			exports: 'Highcharts'
		}*/
	}
});