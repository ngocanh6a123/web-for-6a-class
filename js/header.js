$(document).ready(function () {
    $(window).scroll(function () { 
        changeNav();
        an_hien();
    });
   
   
   
    var changeNav = function() {
        var flag = $("body, html").scrollTop();
      if ( flag> 500) {
         $("#header").addClass("thaydoi");
      } else {
        $("#header").removeClass("thaydoi");
      } 
    }




$("#nav_left ul li a").hover(function () {
    console.log("bhgy");
        $("#nav_left ul li a").removeClass("xanh");
        $(this).addClass("xanh");
        
    },function(){
        $(this).removeClass("xanh");
    }
);
// button
$(".divbutton").click(function (e) { 
    e.preventDefault();
    $("body,html").animate({scrollTop:0},1000)    
});


var an_hien = function() {
    var x = $("html,body").scrollTop();
    if (x > 500) {
      $(".divbutton").css("display", "block");  
    } else {
        $(".divbutton").css("display", "none"); 
    }
}

var changeNav = function() {
    var flag = $("body, html").scrollTop();
  if ( flag> 500) {     
      $("#header").css("display", "none"); 
  } else {
    $("#header").css("display", "block"); 
  } 
}















});