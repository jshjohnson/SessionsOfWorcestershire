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