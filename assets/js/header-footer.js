$(function(){

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var h = window.innerHeight;
       if(scroll >= h){
           $('.navigation-bar').css({
               backgroundColor : '#fff',
               boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
           });
           $('.logo  img').attr('src','assets/images/footerlogo.png')
           $('nav ul li').css({
            color : '#000'
           });
           $('nav ul li a').css({
            color : '#000'
           });
       }else{
        $('.navigation-bar').css({
            backgroundColor: 'transparent',
            boxShadow: 'none'
        });
        $('.logo  img').attr('src','assets/images/logo.png')
           $('nav ul li').css({
            color : '#fff'
           });
           $('nav ul li a').css({
            color : '#fff'
           });
       }
    });

});