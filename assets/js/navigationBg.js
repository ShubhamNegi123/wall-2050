$(function(){
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var h = $(".banner").height();
        if (scroll >= h) {
            
            $('.navigation-bar').css({
                backgroundColor: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
            });
            $('.logo  img').attr('src', 'assets/images/footerlogo.png')
            $('nav ul li').css({
                color: '#000'
            });
            $('nav ul li a').css({
                color: '#000'
            });
            $('.service-dropdown-menu').css({
                backgroundColor: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'          
            });

            $('.navigation-bar nav ul li .service-dropdown-menu .digital-marketing-dropdown a i').css({
               color : '#000'
            });

            $('.digital-marketing-dropdown-menu').css({
                backgroundColor: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'          
            });
            $('.portfolio-dropdown-menu').css({
                backgroundColor: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'          
            });

           


        } else {


            $('.navigation-bar').css({
                backgroundColor: 'transparent',
                boxShadow: 'none'
            });
            $('.logo  img').attr('src', 'assets/images/logo.png')
            $('nav ul li').css({
                color: '#fff'
            });
            $('nav ul li a').css({
                color: '#fff'
            });

            $('.service-dropdown-menu').css({
                backgroundColor: 'rgba(0,0,0,0.5)',
                boxShadow: 'none'          
            });
            $('.digital-marketing-dropdown-menu').css({
                backgroundColor: 'rgba(0,0,0,0.5)',
                boxShadow: 'none'          
            });
            $('.portfolio-dropdown-menu').css({
                backgroundColor: 'rgba(0,0,0,0.5)',
                boxShadow: 'none' 
            });
        }
    });
});