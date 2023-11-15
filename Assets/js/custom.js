(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >100) {
                $("#header").css("position", "fixed ");
                $("#header").css("margin-top", "116px");
                $(".nav-brand img").css("width", "200px");
                $(" .navbar-brand .logo1").css("width", "200px");
                $(".navbar-toggler").css("width", "40px");
                $(".navbar-toggler").css("margin-top", "30px");
                $(".menutop").css("display", "none");
                $(".navbar").css("margin-top", "24px");


            } else {
                $("#header").css("position", "relative ");
                $("#header").css("margin-top", "0px");
                $(".nav-brand img").css("width", "unset");
                $(".navbar-brand .logo1").css("width", "250px");
                $(".navbar-toggler").css("width", "50px");
                $(".navbar-toggler").css("margin-top", "43px");
                $(".menutop").css("display", "flex");
                $(".navbar").css("margin-top", "0px");

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

