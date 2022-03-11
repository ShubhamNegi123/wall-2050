$(function () {

    /* home slider */
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.services').click(function () {
        $('.services').removeClass('active-service');
        $(this).addClass('active-service');
    });

    function hidden() {
        $('.sub-content-wrapper').css({
            visibility: 'hidden',
            opacity: '0',
            transition: 'all .3s ease'
        });
    }

    $('.branding').click(function () {
        hidden();
        $('.branding-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });

    $('.graphic').click(function () {
        hidden();
        $('.graphic-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });

    $('.web').click(function () {
        hidden();
        $('.web-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });

    $('.two-d').click(function () {
        hidden();
        $('.two-d-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });


    $('.marketing').click(function () {
        hidden();
        $('.marketing-content-wrapper').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });








    $('.portfolio-tabs ul li').click(function () {
        $('.portfolio-tabs ul li').removeClass('active-tab');
        $(this).addClass('active-tab');
    });
    
    function none(){
        $('.portfolio-target').css({
            display : 'none'
        });
    }


    $('.graphic').click(function(){
        none();
        $('.graphic-image-wrapper').css({
            display:'block'
        })
    });

    $('.web').click(function(){
        none();
        $('.web-image-wrapper').css({
            display:'block'
        })
    });

    $('.marketing').click(function(){
        none();
        $('.marketing-image-wrapper').css({
            display:'block'
        })
    });

    $('.portfolio-all').click(function(){
        $('.portfolio-target').css({
            display : 'block'
        });
    });





    

    $('.why-us').mouseover(function(){
        $('.quality .fa-magnifying-glass').animate({
            left : '-50px',
        },500);
        $('.quality .fa-magnifying-glass').animate({            
            left : '0px',      
        },500,);        
    })

    




});