$(document).ready(function () {
    $(document).on("click", ".burger-boxes", function (e) {
        $(this).toggleClass("active");
    });

    $(document).on("click", ".section-4_nav li", function (e) {
        if (!$(this).hasClass("active")) {
            $(".section-4_nav li").removeClass("active");
            $(this).addClass("active");
            var imgId = $(this).attr("data-id");
            $('#' + imgId).addClass("active");
            $('#' + imgId).siblings().removeClass('active')
        }
    });

    $(document).on("click", ".section-1_nav li, .section-2_nav li", function (e) {
        $('html,body').animate({
            scrollTop: $('#' + $(this).attr('data-id')).offset().top
        },
            'slow');
    });

    $(".section-2_carousels").slick({
        dots: true,
        mobileFirst: true,
        // infinite: true,
        centerPadding: '56px',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })
});
