/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
/* ==========================================================================
   Polyfills/UA sniffing
   ========================================================================== */

require(['modernizr'], function(Modernizr) {

    var app = {};

    app.modernizrSVG = (function(){
        var module = {};
        
        module.init = function(){
            if (!Modernizr.svg) {
                var imgs = document.getElementsByTagName('img');
                var svgExtension = /.*\.svg$/;
                var l = imgs.length;
                for(var i = 0; i < l; i++) {
                    if(imgs[i].src.match(svgExtension)) {
                        imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
                    }
                }
            }
        };

        return module;
    })();
    
    app.modernizrSVG.init();
    
});