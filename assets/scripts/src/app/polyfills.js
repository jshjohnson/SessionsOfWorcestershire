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

    app.modernizrVideo = (function(){
        var module = {};
        
        module.init = function(){
            if (Modernizr.video) {

                var root = document.documentElement;
                var video = Modernizr.video;

                if(video.ogg) {
                    addClass(root,'ogg-support');
                } else {
                    addClass(root,'no-ogg-support');
                }

                if(video.h264) {
                    addClass(root,'h264-support');
                } else {
                    addClass(root,'no-h264-support');
                }

                if(video.webm) {
                    addClass(root,'webm-support');
                } else {
                    addClass(root,'no-webm-support');
                }
            }
        };

        return module;
    })();

    app.chromeDetection = (function(){
        var module = {};

        module.init = function(){
            var root = document.documentElement;
            if(navigator.userAgent.match('CriOS')) {
                addClass(root , 'is-chrome-ios');
            }
        };

        return module;
    })();
    
    app.modernizrSVG.init();
    app.modernizrVideo.init();
    app.chromeDetection.init();
    
});