/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
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

                forEach(backToTopLink, function (index, el) {
                    // If screen is not ridicously small
                    if (scrollBarPosition > offset) {
                        if (el.classList) {
                            el.classList.add('visible');
                        } else {
                            el.className += ' ' + 'visible';
                        }
                    } else {
                        if(el.classList.contains('visible')) {
                            el.classList.remove('visible');
                        }
                    }
                });

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