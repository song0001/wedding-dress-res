$(function() {
    $(".box").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").addClass("close");
            $(".header-m .nav").fadeOut();
            $('body').css({ "overflow-x": "auto", "overflow-y": "auto" });
        } else {
            $(this).removeClass("close").addClass("active");
            $(".header-m .nav").fadeIn();
            $('body').css({ "overflow-x": "hidden", "overflow-y": "hidden" });
        }
        //   模糊
        if ($('.content-filter').hasClass('filter')) {
            $('.content-filter').removeClass('filter')
        } else {
            $('.content-filter').addClass('filter')
        }

    });
    // 滚动导航栏
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $('.header-m,.header').css({
                "background": "#fbfbfb",
                'height': '70px',
                "position": "fixed",
                "boxShadow": "0 1px 10px rgba(0, 0, 0, 0.3)",
            })
            $('.veronica').css({
                "marginTop": 17
            })

        }
        if ($(window).scrollTop() < 10) {
            $('.header-m,.header').css({
                'height': '80px',
                "width": "100%",
                "position": "relative"
            })
        }
    })





})