$(function() {
    var header = $("#header"),
        introH=$("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Sider */
    $("[data-slider]").slick({
        Infinite: true,
        fade: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});