$(document).ready(function () {
    TweenMax.staggerFrom($('.br_one'), 1.5, {left:100, opacity: 0}, 0.4);
    TweenMax.staggerFrom($('.bl_one'), 1.5, {right:100, opacity: 0}, 0.4);
});