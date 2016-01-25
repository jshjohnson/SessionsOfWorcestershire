/* ==========================================================================
   Toggles on/off the fullscreen menu
   ========================================================================== */

require(['app/utilities'], function(utils) {

    var app = {};

    app.offCanvas = (function() {
        var module = {};

        module.init = function() {
            var canvas = document.querySelector('.js-canvas');
            var nav = document.querySelector('.js-canvas-nav');
            var toggle = document.querySelector('.js-canvas-toggle');

            var toggleCanvas = function(el) {
                if(utils.hasClass(el,'is-active')) {
                    utils.removeClass(el, 'is-active');
                } else {
                    utils.addClass(el, 'is-active');
                }
            };

            var closeCanvas = function(el) {
                utils.removeClass(el, 'is-active');
            };

            toggle.addEventListener('click', function(){
                toggleCanvas(canvas);
            });

            canvas.addEventListener('click', function(e){
                if (utils.hasClass(canvas,'is-active')) {
                    if (nav !== e.target && !nav.contains(e.target) && toggle !== e.target) {
                        closeCanvas(canvas);
                    }
                }
            });

            document.addEventListener('keyup', function(e) {
                if (e.keyCode == 27) {
                    if (utils.hasClass(canvas,'is-active')) {
                        // Assuming you used the function I made from the demo
                        toggleCanvas(canvas);
                    }
                } 
            });
                
        };

        return module;
    })();

    app.offCanvas.init();

});