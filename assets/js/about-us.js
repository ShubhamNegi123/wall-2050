$(function () {


    function hide(){
        $('.our-story-content').css({
            visibility: 'hidden',
            opacity: '0'
        });
    }

    $('.our-story').click(function(){
        $('.our-story').removeClass('active');
        $(this).addClass('active');
    });

    $('.mission').click(function () {
        hide();
        $('.mission-content').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });


    $('.vision').click(function () {
        hide();
        $('.vision-content').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });


    $('.team').click(function () {
        hide();
        $('.team-content').css({
            visibility: 'visible',
            opacity: '1',
            transition: 'all .3s ease'
        });
    });



   





});