/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
/* ==========================================================================
   Apply fastclick to body to remove 300ms lag on click on mobile
   
   See: https://github.com/ftlabs/fastclick
   ========================================================================== */

define(['fastclick'], function(FastClick) {
    
    var app = {};

    app.click = (function() {
        var module = {};

        module.init = function () {
            FastClick.attach(document.body);
        };
        
        return module;
    })();

    app.click.init();

});