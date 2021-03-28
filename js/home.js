$(document).ready(function () {
     // TweenMax.staggerFrom($(".p_and_img"), 2.5, { ease: Bounce.easeOut, left: -500 });
     // TweenMax.staggerFrom($(".imgsssssssssss"), 2.5, { ease: Bounce.easeOut, right: -500 });
     // TweenMax.staggerFrom($(".chung img"), 2.5 , { ease:  Power2.easeOut, y: 500 }, 0.2);

     var swiper = new Swiper('.slide_banner .swiper-container', {
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },
        });

        var swipers = new Swiper('.fog .swiper-container', {
          speed: 500,
          autoplay: {
               delay: 3000,
             },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
});