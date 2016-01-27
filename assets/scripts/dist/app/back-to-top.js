/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson, James Blizzard | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
/* ==========================================================================
   Show back to top icon after scroll down
   ========================================================================== */

require(['modernizr'], function(Modernizr) {
    
    var app = {};

    app.backtotop = (function() {
        var module = {};

        module.init = function () {
            var backToTopLink = document.querySelectorAll('.js-back-to-top');
            var offset = 750;

            var backToTopController = function() {
                var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

                for (var i = backToTopLink.length - 1; i >= 0; i--) {
                    var el = backToTopLink[i];
                    // If screen is not ridicously small
                    if (scrollBarPosition > offset) {
                        if (el.classList) {
                            el.classList.add('is-active');
                        } else {
                            el.className += ' ' + 'is-active';
                        }
                    } else {
                        if(el.classList.contains('is-active')) {
                            el.classList.remove('is-active');
                        }
                    }
                };
            };

            if(window.attachEvent) {
                document.attachEvent('onscroll', function() {
                    backToTopController();
                });
            } else if(window.addEventListener) {
                document.addEventListener('scroll', function(){
                    backToTopController();
                });
            }

            backToTopController();
        };
        
        return module;
    })();

    app.backtotop.init();

});
