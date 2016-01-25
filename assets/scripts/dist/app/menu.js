/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
/* ==========================================================================
   Toggles on/off the fullscreen menu
   ========================================================================== */

require([], function() {

    var app = {};

    app.menu = (function() {
        var module = {};

        module.init = function() {
            var html = document.getElementsByTagName('html')[0];
            var body = document.body;
            
            var navToggle = document.querySelectorAll('.js-nav-toggle');
            var navTarget = document.querySelector('.nav--fullscreen');
            var navLink = document.querySelectorAll('.nav--fullscreen .nav__link');
            
            var video = document.querySelector('.section__video');
            
            var minWidth = Modernizr.mq('only screen and (min-width: 1050px)');
            var maxWidth = Modernizr.mq('only screen and (max-width: 1250px)');
            var backgroundNavClasses = new Array(
                'bg-red',
                'bg-green',
                'bg-light-blue',
                'bg-royal-blue'
            );

            var navController = function(e) {
                if(hasClass(navTarget, 'nav--open') === true) {
                    removeClass(navTarget, 'nav--open');
                } else {
                    addClass(navTarget, 'nav--open');
                }

                if(hasClass(html, 'kill-scroll') === true) {
                    removeClass(html, 'kill-scroll');
                } else {
                    addClass(html, 'kill-scroll');
                }

                // On mobile/tablet when they are no fixed menu buttons, nuke scroll
                if(maxWidth) { 
                    if(hasClass(body, 'kill-scroll') === true) {
                        removeClass(body, 'kill-scroll');
                    } else {
                        addClass(body, 'kill-scroll');
                    }
                }

                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                // Pause/play video for performance
                if(video && minWidth) {
                    if (video.paused === false) {
                        video.pause();
                    } else {
                        video.play();
                    }
                }
            };

            var navAddBackground = function(value) {
                // Grab random class from array on load
                var randClass = backgroundNavClasses[~~(Math.random()*backgroundNavClasses.length)];

                if(window.attachEvent) {
                    value.attachEvent('mouseover', function(){
                        addClass(navTarget, randClass);
                    });
                    value.attachEvent('mouseout', function(){
                        removeClass(navTarget, randClass);
                    });

                    // If array is not empty
                    if (backgroundNavClasses.length > 1) {
                        // Find and remove class from an array to avoid duplication
                        removeFromArray(backgroundNavClasses, randClass);
                    } else {
                        // Otherwise restore the array
                        backgroundNavClasses.push(
                            'bg-red',
                            'bg-green',
                            'bg-light-blue',
                            'bg-royal-blue'
                        );
                    }
                } else if(window.addEventListener) {
                    value.addEventListener('mouseover', function(){
                        addClass(navTarget, randClass);
                    }, false);

                    value.addEventListener('mouseout', function(){
                        removeClass(navTarget, randClass);
                    }, false);

                    if (backgroundNavClasses.length > 1) {
                        // Find and remove class from an array to avoid duplication
                        removeFromArray(backgroundNavClasses, randClass);
                    } else {
                        // Otherwise restore the array
                        backgroundNavClasses.push(
                            'bg-red',
                            'bg-green',
                            'bg-light-blue',
                            'bg-royal-blue'
                        );
                    }
                }
            };

            // If toggle is in page
            if(navToggle) {
                // Run function on click
                forEach(navToggle, function (index, value) {
                    if(window.attachEvent) {
                        value.attachEvent('onclick', navController);
                    } else if(window.addEventListener) {
                        value.addEventListener('click', navController, false);
                    }
                });

                if(navLink) {
                    forEach(navLink, function (index, value) {
                        navAddBackground(value);
                    });
                }
            }
        };

        return module;
    })();

    app.menu.init();

});