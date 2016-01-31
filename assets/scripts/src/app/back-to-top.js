/* ==========================================================================
   Show back to top icon after scroll down
   ========================================================================== */

require(['modernizr', 'app/utilities'], function(Modernizr, utils) {
    
    var app = {};

    app.backtotop = (function() {
        var module = {};

        module.init = function () {
            var backToTopLink = document.querySelectorAll('.js-back-to-top');
            var offset = 750;

            var backToTopController = utils.debounce(function() {
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
            }, 100);

            document.addEventListener('scroll', function(){
                backToTopController();
            });

            backToTopController();
        };
        
        return module;
    })();

    app.backtotop.init();

});
