$(function() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.custom-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function(swiper, current, total) {
                // console.log(current); //1 2 3 4
                // 1、分页器激活样式的改变---给自己添加激活样式并将兄弟的激活样式移出。
                $('.custom-pagination').children().eq(current - 1).addClass('active').siblings().removeClass('active');
                // 2、分页器点击的时候同时切换轮播图(事件委托)----循环模式slideToLoop--
                $('.custom-pagination').on('click', '.dot-item', function() {
                    swiper.slideToLoop($(this).index(), 1000, false)
                })
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper1 = new Swiper('.swiper-container1', {
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.custom-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                switch (index) {
                    case 0:
                        text = '新品/NEW';
                        break;
                    case 1:
                        text = '2018春夏';
                        break;
                    case 2:
                        text = '珠宝配饰';
                        break;
                    case 3:
                        text = '专属定制';
                        break;

                }
                return '<li class="nav-item ' + className + '">' + text + '</li>';
            },
            // }
        },

    });
})