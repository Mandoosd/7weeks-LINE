$(function () {
    $('.slide_wrap').on('init', function () {
        let current = $('.slide_wrap .slick-current');
        current.addClass('on');
    });

    $('.slide_wrap').slick({
        fade: true,
        speed: 1500,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
    });

    $('.slide_wrap').on('beforeChange', function () {
    });

    $('.slide_wrap').on('afterChange', function () {
        let current = $('.slide_wrap .slick-current');
        $('.slide_wrap .itm').removeClass('on');
        current.addClass('on');
    });

})