(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >100) {
                $("#header").css("position", "fixed");
                $("#header").css("margin-top", "112px");
                $(".nav-brand img").css("width", "240px");
                $(".nav-brand img").css("padding", "10px 0px");
                $(".navbar-brand .logo1").css("width", "230px");
                $(".navbar-toggler").css("width", "40px");
                $(".navbar-toggler").css("margin-top", "30px");
                $(".menutop").css("display", "none");
                $(".navbar").css("margin-top", "24px");
                // $(".main_menu").css("padding", "0px");


            } else {
                $("#header").css("position", "relative");
                $("#header").css("margin-top", "0px");
                $(".nav-brand img").css("width", "300px");
                $(".nav-brand img").css("padding", "20px 0px");
                $(".navbar-brand .logo1").css("width", "280px");
                $(".navbar-toggler").css("width", "50px");
                $(".navbar-toggler").css("margin-top", "43px");
                $(".menutop").css("display", "flex");
                $(".navbar").css("margin-top", "0px");
                // $(".main_menu").css("padding", "20px 0px 0px");

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

