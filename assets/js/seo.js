$(function () {


    $('.content-writing h3').click(function () {
        $('.content-writing-box').slideToggle();

        if ($('.content-writing h3 i').hasClass('fa-chevron-up')) {
            $('.content-writing h3 i').removeClass('fa-chevron-up');
            $('.content-writing h3 i').addClass('fa-chevron-down');
        } else {
            $('.content-writing h3 i').addClass('fa-chevron-up');
            $('.content-writing h3 i').removeClass('fa-chevron-down');
        }
    });

    $('.off-page h3').click(function () {
        $('.off-page-box').slideToggle();

        if ($('.off-page h3 i').hasClass('fa-chevron-up')) {
            $('.off-page h3 i').removeClass('fa-chevron-up');
            $('.off-page h3 i').addClass('fa-chevron-down');
        } else {
            $('.off-page h3 i').addClass('fa-chevron-up');
            $('.off-page h3 i').removeClass('fa-chevron-down');
        }
    });

    $('.monthly-report h3').click(function () {
        $('.monthly-report-box').slideToggle();

        if ($('.monthly-report h3 i').hasClass('fa-chevron-up')) {
            $('.monthly-report h3 i').removeClass('fa-chevron-up');
            $('.monthly-report h3 i').addClass('fa-chevron-down');
        } else {
            $('.monthly-report h3 i').addClass('fa-chevron-up');
            $('.monthly-report h3 i').removeClass('fa-chevron-down');
        }
    });



    $(".outer-list ul ").hover(function () {
        $(this).css({
            transform: 'scale(1.022)',
            transition: 'all .3s ease',
            boxShadow: ' rgba(0, 0, 0, 0.08) 0px 4px 12px',
        });
    }, function () {
        $(this).css({
            transform: 'scale(1.0)',
            transition: 'all .3s ease',
            boxShadow: ' none'
        });
    });

  


});