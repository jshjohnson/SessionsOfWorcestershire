/* ==========================================================================
   Apply fastclick to body to remove 300ms lag on click on mobile

   See: https://github.com/ftlabs/fastclick
   ========================================================================== */

require(['app/utilities'], function(utils) {

    var app = {};

    app.alerts = (function() {
        var module = {};

        module.init = function () {
            var collisionArea = document.querySelector('.js-collision-area');
            var alert = document.querySelector('.js-collision-alert');

            var handleCollision = function(el) {
                el.classList.add('alert--primary', 'alert--fixed');
            };

            var revertCollision = function(el) {
                el.classList.remove('alert--primary', 'alert--fixed');
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
