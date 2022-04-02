$(function () {




    /* form first name validation */
    $("#name").on("blur", function () {
        if ($(this).val() == '') {
            $('.name-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.name-error').text('Please fill out this field');

        } else if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.name-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.name-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.name-error').text('Enter a valid name');
        }
    });



    $("#email").on("blur", function () {
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

        if ($(this).val() == '') {
            $('.email-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.email-error').text('Please fill out this field');

        } else if (pattern.test($(this).val())) {
            $('.email-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.email-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.email-error').text('Enter a valid email');
        }
    });







    $("#phone").on("blur", function () {
        var pattern = /^[0-9]{10}$/;
        if (pattern.test($(this).val())) {
            $('.phone-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
        else if ($(this).val() == '') {
            $('.phone-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.phone-error').text('Please fill out this field');

        } else {
            $('.phone-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.phone-error').text('Enter a valid phone number');
        }
    });

    $("#website").on("blur", function () {
        var url = $(this).val();        
        if ($(this).val() == '') {
            $('.website-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.website-error').text('Please fill out this field');

        } else {
            $('.phone-error').css({
                visibility: 'hidden',
                opacity: 0,
            });
        }
    });


    $("#message").on("blur", function () {
        var url = $(this).val();        
        if ($(this).val() == '') {
            $('.message-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.message-error').text('Please fill out this field');

        } else {
            $('.message-error').css({
                visibility: 'hidden',
                opacity: 0,
            });
        }
    });


    // Below regular expression can validate input URL with or without http:// etc
   
    

   
});