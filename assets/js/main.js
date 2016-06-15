$(document).ready(function () {


    $('.schedule_expand').on('click', function(e){
        e.preventDefault();
        var targetContent = $(this).children('.schedule_item').find('.panel-collapse');
        targetContent.toggleClass('in');
        $(this).toggleClass('collapsed');
    });



    /*=================================
     ||          Turn off Google Map zooming
     ==================================*/
    $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#map').on('click', function () {
        $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
    });
    // you want to disable pointer events when the mouse leave the canvas area;
    $(".map_canvas").mouseleave(function () {
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
});


// Countdown jquery

$(function () {
    var day = 19,
        month = 9,
        year = 2016;
    var austDay = new Date(year, month - 1, day);
    $('#defaultCountdown').countdown({until: austDay});
    $('#year').text(austDay.getFullYear());
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function () {
    handleTopNavAnimation();
});

$(window).load(function () {
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top = $(window).scrollTop();

    if (top > 10) {
        $('#site-nav').addClass('navbar-solid');
    }
    else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
    $('#navbar-items a[href*=#]:not([href=#]), a.inpage').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});