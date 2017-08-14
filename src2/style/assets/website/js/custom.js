$(document).ready(function(){

    $('.selectyze2').Selectyze({
        theme : 'mac'
    });


});


// You can also use "$(window).load(function() {"
$(function () {

    // Slideshow 1
    $("#slider1").responsiveSlides({
        auto: true,
        pager: false,
        nav: false,
        speed: 1500,
        timeout:4E3,
        namespace: "centered-btns"
    });
});

$(document).ready(function(){
    $('.carousel').carousel({
        pause: "false",
        interval : 13000,

    });
});