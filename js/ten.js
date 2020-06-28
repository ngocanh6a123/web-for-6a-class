$(document).ready(function () {
    
    console.log("hom nay hoc ve jquey");// hien thi len man hinh consle

    /* bien trong lap trinh va khai bao*/
    //khai bao bien kieu so nguyen (int)
    var a = 6; // int a = 6


    //khai bao bien kieu so thuc (float/double)
    var b = 5.5; //float b = 5.5

    // khai bao bien kieu ki tu (char)
    var c = "a";

    // khai bao bien kieu xau ki tu (String)
    var d = "chung ta";
    

    /*Cac toan tu (cac phep +, -, *, /, %) trong lap trinh */
    // + : phep cong

    var sum = null; // khai bao mot bien null ( khong co gia tri va khong co kieu cua bien )
    console.log(sum);

    sum = a + 5; // cong hai bien co cung kieu du lieu
    console.log(sum);

    sum = a + b; // ep kieu a tu int sang float, sum se la mot so thuc
    console.log(sum);

    sum = a + c; // ep kieu a tu int sang char, sum se mot chuoi ki tu (String)
    console.log(sum);


    // - : phep tru
    var fgfx = null;
    console.log(fgfx);
     
    fgfx = a - b;
    console.log(fgfx);

    fgfx = a - c; // khong the bieu dien
    console.log(fgfx)

    // luu y: doi voi cac kieu du lieu char va String, chi thao tac duoc voi phep cong
    

    // * : phep nhan

    var kq3 = null;
    kq3 = a * b;
    console.log(kq3);

    // / : phep chia
    var kq4 = null;
    kq4 = 4 /2;
    console.log(kq4);
    kq4 = "accc"/"aad";
    console.log(kq4);

    // % : lay ra so du (lay phan du)
    var kq5 = null;
    kq5 = 5 % 2;
    console.log(kq5);
    kq5 = 6 % 2;
    console.log(kq5);
    kq5 = 5.5 % 2;
    console.log(kq5);
    kq5 = "acbc" % "ad";
    console.log(kq5);


});