/*! sessions-of-worcestershire v1.0.0 | (c) 2016 Josh Johnson, James Blizzard | https://github.com/jshjohnson/SessionsOfWorcestershire#readme */
/* ==========================================================================
   RequireJS config
========================================================================== */
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

define('modernizr', [], function() { return Modernizr; });

require.config({
    paths: {
        smoothScroll: 'libs/smoothscroll',
        fastclick: 'libs/fastclick',
    },
    shim: {
        'modernizr': { exports: 'Modernizr' }
    },
    waitSeconds: 200,
});

requirejs(["app/click"]);
requirejs(["app/smooth"]);
requirejs(["app/polyfills"]);
requirejs(["app/off-canvas"]);
requirejs(["app/back-to-top"]);
