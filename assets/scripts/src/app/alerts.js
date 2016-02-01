/* ==========================================================================
   Apply fastclick to body to remove 300ms lag on click on mobile

   See: https://github.com/ftlabs/fastclick
   ========================================================================== */

require(['app/utilities'], function(utils) {

    var app = {};

    app.alerts = (function() {
        var module = {};

        module.init = function () {
            var body = document.body;
            var collisionArea = document.querySelector('.js-collision-area');
            var alert = document.querySelector('.js-collision-alert');
            var headerSpacer = document.createElement('div');
                headerSpacer.classList.add('alert', 'alert--spacer', 'js-alert-spacer');
                headerSpacer.style.height = alert.offsetHeight + "px";

            var handleCollision = function(el) {
                el.parentNode.insertBefore(headerSpacer, el)
                el.classList.add('alert--fixed');
            };

            var revertCollision = function(el) {
                var space = document.querySelector('.js-alert-spacer');
                if(space) {
                    space.parentNode.removeChild(space);    
                }
                el.classList.remove('alert--fixed');
            };

            var collisionDetection = function() {
                var collisionAreaDistance = utils.getElemDistance(collisionArea) - utils.getScrollPosition();
                if(collisionAreaDistance < 0) {
                    handleCollision(alert);
                } else {
                    revertCollision(alert);
                }
            };

            if(collisionArea && alert) {
                window.addEventListener('scroll', function(){
                    collisionDetection();
                });

                collisionDetection();
            }
        };

        return module;
    })();

    app.alerts.init();

});
