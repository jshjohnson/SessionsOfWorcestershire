/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson, James Blizzard | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
/* ==========================================================================
   Initialise smooth anchor scrolling
   ========================================================================== */

require(['smoothScroll'], function(Smoothscroll) {

	var app = {};

	app.smooth = (function() {
		var module = {};

		module.init = function() {
			Smoothscroll.init({
				speed: 400,
				easing: 'easeInOutCubic',
				offset: 0,
				updateURL: false
			});
		};
		return module;
	})();

	app.smooth.init();
});