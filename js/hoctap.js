$(document).ready(function () {
    TweenMax.staggerFrom($('#news_right .nr_one_row'),2.5, { ease: Bounce.easeOut, x: 200 },0.2);
    TweenMax.staggerFrom($('#news_left .nl_one_row'),1.25, { ease: Power0.easeNone, x:-200 },0.4);
     
});