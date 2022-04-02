$(function () {

    let emailValid;
    let NameValid;
    let phoneValid;
    let serviceValid;
    let messageValid;
    var selectedServices;

    function isNameValid() {
        let name = $('#name').val();
        let len = name.length;
        if (name === '') {
            $('.form .name-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .name-error').text('Name can not be empty');
            nameValid = false;
        } else if (len < 3 || len > 20) {
            $('.form .name-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .name-error').text('Enter a valid name');
            nameValid = false;
        } else {
            $('.form .name-error').css({
                opacity: '0',
                visibility: 'hidden',
            });
            nameValid = true;
        }
    }

    function isEmailValid() {
        let email = $('#email').val();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (regex.test(email)) {
            $('.form .email-error').css({
                opacity: '0',
                visibility: 'hidden',
            });
            emailValid = true;
        } else if (email === '') {
            $('.form .email-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .email-error').text('Email can not be empty');
            emailValid = false;
        } else {
            $('.form .email-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .email-error').text('Enter a valid Email');
            emailValid = false;
        }
    }

    function isPhoneNumberValid() {
        let phone = $('#phone').val();
        let len = phone.length;
        if (phone === '') {
            $('.form .phone-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .phone-error').text('phone can not be empty');
            phoneValid = false;
        } else if (len != 10) {
            $('.form .phone-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .phone-error').text('Enter a valid phone number');
            phoneValid = false;
        } else {
            $('.form .phone-error').css({
                opacity: '0',
                visibility: 'hidden',
            });
            phoneValid = true;
        }
    }
 
    function isMessageValid() {
        let message = $('#message').val();
        let len = message.length;
        if (message === '') {
            $('.form .message-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .message-error').text('Message can not be empty');
            messageValid = false;
        } else if (len < 10 ) {
            $('.form .message-error').css({
                opacity: '1',
                visibility: 'visible',
            });
            $('.form .message-error').text('Enter a valid message');
            messageValid = false;
        } else {
            $('.form .message-error').css({
                opacity: '0',
                visibility: 'hidden',
            });
            messageValid = true;
        }
    }

    function hideSubmitError() {
        $('.submit-error').css({
            opacity: '0',
            visibility: 'hidden',
        });
    }


    $('#name').blur(function () {
        isNameValid();
        hideSubmitError();
    });
    $('#email').blur(function () {
        isEmailValid();
        hideSubmitError();
    });
    $('#phone').blur(function () {
        isPhoneNumberValid();
        hideSubmitError();
    });
    
    $('#message').blur(function () {
       isMessageValid();
       hideSubmitError();
    });

   
    $("form").submit(function (event) {
        event.preventDefault();
        isNameValid();
        isEmailValid();
        isPhoneNumberValid();
        isMessageValid();

        if (nameValid && emailValid && phoneValid && messageValid) {
            $('#newsletter label').hide();
            window.location = 'assets/php/packages.php';
        } else {
           $('.submit-error').css({
            opacity: '1',
            visibility: 'visible',
           });
        }
    });


   
});