$(document).ready(function () {
//su kien click trong jq
// $(selector).click(function (e) { 
//     e.preventDefault();
    
// });  
// +) dau $ co nghia la chon
// +) selector: la phan tu hoac mang phan tu minh muon lua chon 
// +) e.preventDefault: ngan cai hanh dong ban dau cua no ( vd nhu chuyen trang)





// ham add class
// $(selector).addClass(className);
// +)className: ten cua class viet trong css ma minh muon them vao phan tu 



// ham remove class
// $(selector).removeClass(className);
// +)className: ten cua class viet trong css ma minh muon xoa bo



// ham toggle class
// $(selector).toggleClass(className);
// y nghia: gom 2 thao tac add va remove

// ham trong jq

// "khai niem cua ham:"
// ham la mot doan trương trinh 
// bao gom 1 hoac nhieu xu ly
// de phuc vu cho mot muc dich nhat dinh 
// su dung ham nham giai quyet van de tai su dung ma nguon

// "dac trung cua ham:"
// co ten gọi de goi ham va kieu cua ham (kieu cua ham nghien cuu o cac ngon ngu khac)
// co hoac ko co tham so truyen vao
// co gia tri tra ve ( day la su khac biet cua ham va thu tuc) 
// cach thu nhat
//var abc = function(){
    // khoi lenh 
    // return: gia tri tra ve ( day la diem khac biet giua ham va thu tuc)
//}

// cach thu hai
//function abc (){
    // khoi lenh
    // return 
//}

// thu tuc trong jq: cach viet giong ham nhung khong co gia tri tra ve

// hover trong jquery
    $("#nav_left ul li a").hover(function () {
        console.log("bhgy");
            $("#nav_left ul li a").removeClass("xanh");
            $(this).addClass("xanh");
            
        },function(){
            $(this).removeClass("xanh");
        }
    );




// su kien scroll trong jq
// 1.Khai niem:
// scroll: su kien ung voi thao tac cua con tro chuot 
// 2.Cau truc:
// $(selector).scroll(function () { 
//     Cac thao tac su ly
// });

// 3.Cac vi du cu the 
// 3.1: thay doi thanh navbar khi cuon chuot 
// +) thuoc tinh offset: vi tri cua con tro chuot so voi cac vi tri dau , cuoi , trai , phai cua mot trang web 
// console.log( $(selector).offset().top;
// +) scrolltop(): lay khoang cach tu vi tri con lan den vi tri dau trang khi minh cuon chuot

 




    function changebutton() {
        var y =  $("html, body").scrollTop();
      if ( y < 700 ) {
        $(".chuyenlen").removeClass("thaydoi");
      } else {
        $(".chuyenlen").addClass("thaydoi");
      }
    }  


    $(window).scroll(function () { 
      changebutton();
    });

    
});





   

