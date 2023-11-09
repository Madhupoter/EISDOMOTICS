(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >100) {
                $("#header").css("position", "fixed");
                $("#header").css("margin-top", "116px");
                $(".logo1").css("width", "120px");
                $(".navbar-toggler").css("width", "40px");
                $(".navbar-toggler").css("margin-top", "30px");


            } else {
                $("#header").css("position", "relative");
                $("#header").css("margin-top", "0px");
                $(".logo1").css("width", "200px");
                $(".navbar-toggler").css("width", "50px");
                $(".navbar-toggler").css("margin-top", "43px");

            }
        });
    }
})(jQuery);



var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
}

;