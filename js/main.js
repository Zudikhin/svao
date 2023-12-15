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

    $(".project_block_item").each(function() {

        $(this).find(".project_block_item_img_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false
        });
      
    });

    $(".project_block_item_img_prev").click(function() {
        $(this).parent().find(".project_block_item_img_slider").slick('slickPrev');
    });

    $(".project_block_item_img_next").click(function(){
        $(this).parent().find(".project_block_item_img_slider").slick('slickNext');
    });


    $(".home_cat_block_wrap_list_item").each(function() {

        $(this).find(".home_cat_block_wrap_list_item_img_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false
        });
      
    });

    $(".home_cat_block_wrap_list_item_img_prev").click(function() {
        $(this).parent().find(".home_cat_block_wrap_list_item_img_slider").slick('slickPrev');
    });

    $(".home_cat_block_wrap_list_item_img_next").click(function(){
        $(this).parent().find(".home_cat_block_wrap_list_item_img_slider").slick('slickNext');
    });


    $(".choice_block_main_list_item").each(function() {

        $(this).find(".choice_block_main_list_item_img_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false
        });
      
    });

    $(".choice_block_main_list_item_img_prev").click(function() {
        $(this).parent().find(".choice_block_main_list_item_img_slider").slick('slickPrev');
    });

    $(".choice_block_main_list_item_img_next").click(function(){
        $(this).parent().find(".choice_block_main_list_item_img_slider").slick('slickNext');
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

    $(".review_block").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        appendDots: $(".review_nav_dots"),
        prevArrow: $(".review_nav_prev"),
        nextArrow: $(".review_nav_next")
    });

    $(".region_nav_item").click(function() {
        $(".region_nav_item").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".region_content_item").removeClass("active");
        $(`#${attr}`).addClass("active");
    });

    // $('.similar_block').slick({
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     dots: false,
    //     arrows: false,
    //     variableWidth: true
    // });

    $(".contacts_office_nav_btns_item").click(function() {
        $(".contacts_office_nav_btns_item").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("data-target");
        $(".contacts_office_main_item").removeClass("active");
        $(`#${id}`).addClass("active");
    });

    $(".services_repair_rates_nav_item").click(function() {
        $(".services_repair_rates_nav_item").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("data-target");
        $(".services_repair_rates_main_item").removeClass("active");
        $(`#${id}`).addClass("active");
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


    $('.home_cat_block_wrap_search input').on('input',function(e){
        var valueInput = $(this).val();
        if(valueInput) {
            $(".home_cat_block_wrap_search_remove").addClass("active");
        } else {
            $(".home_cat_block_wrap_search_remove").removeClass("active");
        }
    });

    $(".home_cat_block_wrap_search_remove").click(function() {
        $('.home_cat_block_wrap_search input').val("");
        $(this).removeClass("active");
    });

    $(".remove_input").click(function() {
        $(this).parent().find("input").val("");
        $(this).parent().find(".remove_input").css("display", "none");
    });

    $(".stage_block_list_item_top").click(function() {
        $(this).parent().find(".stage_block_list_item_body").slideToggle();
        $(this).parent().toggleClass("active");
    });

    $(".choice_block_sidebar_accordion_item_top").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".choice_block_sidebar_accordion_item_body").slideToggle();
    });


    $(".also_block").slick({
        slidesToShow: 1,
        speed: 200,
        mobileFirst: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });  

    $("#filtBtn").click(function() {
        $(".back_modal").addClass("active");
        $(".modal_filter").addClass("active");
        $("body").addClass("scroll");
    });

    $(".modal_filter_top_btn").click(function() {
        $(".back_modal").removeClass("active");
        $(".modal_filter").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".header_block_left_filter").click(function() {
        $(".header").toggleClass("drop");
        $(".back_menu").toggleClass("active");
        $(".dropdown").toggleClass("active");
        $("body").toggleClass("scroll");
    });

    $(".back_menu").click(function() {
        $(this).removeClass("active");
        $("body").removeClass("scroll");
        $(".header").removeClass("drop");
        $(".dropdown").removeClass("active");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".modal_filter").removeClass("active");
        $("body").removeClass("scroll");
    });

    function setProgress(index) {
        const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
      
        $progressBar
          .css('background-size', `${calc}% 100%`)
          .attr('aria-valuenow', calc);      
    }
      
      const $slider = $('.gallery_block');
      const $progressBar = $('.progress');
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        setProgress(nextSlide);
      });
      
      $slider.slick({
        slidesToShow: 2,
        speed: 200,
        mobileFirst: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6
                }
            }
        ]
      });  
      
      setProgress(0);

});