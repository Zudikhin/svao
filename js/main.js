$(document).ready(function() {
    "use strict";

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $(".header").addClass("hide");
        } else {
            $(".header").removeClass("hide");
        }
        lastScrollTop = st;
    });

    $('.main_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: true,
        fade: true,
		prevArrow: $('.main_slider_item_wrap_title_arrows_left'),
      	nextArrow: $('.main_slider_item_wrap_title_arrows_right')
	});

    $('.residential_complexes_slider').slick({
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true
    });

    $('.collections_slider').slick({
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true
    });

    $('.flat_block_left_for_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.flat_block_left_nav',
        prevArrow: $('.flat_block_left_for_arrows_prev'),
      	nextArrow: $('.flat_block_left_for_arrows_next')
    });

    $('.flat_block_left_nav').slick({
        slidesToShow: 3,
        mobileFirst: true,
        slidesToScroll: 1,
        asNavFor: '.flat_block_left_for_slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1919,
                settings: {
                    slidesToShow: 4,
                    adaptiveHeight: true,
                    vertical: true
                }
            }
        ]
    });

    $(".region_nav_item").click(function() {
        $(".region_nav_item").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".region_content_item").removeClass("active");
        $(`#${attr}`).addClass("active");
    });

    $('.similar_block').slick({
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        variableWidth: true
    });

    $(".main_bottom_content_right").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".residential_complexes").offset().top
        }, 1000);
    });

    $('input').on('input',function(e){
        var valueInput = $(this).val();
        if(valueInput) {
            $(this).parent().find(".remove_input").css("display", "block");
        } else {
            $(this).parent().find(".remove_input").css("display", "none");
        }
    });

    $(".remove_input").click(function() {
        $(this).parent().find("input").val("");
        $(this).parent().find(".remove_input").css("display", "none");
    });

});