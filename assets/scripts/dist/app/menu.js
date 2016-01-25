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
            
        };

        return module;
    })();

    app.menu.init();

});