$(function () {

    let nameValid;
    let emailValid;
    let NameValid;
    let phoneValid;





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



    $('#name').blur(function () {
        isNameValid();
    });
    $('#email').blur(function () {
        isEmailValid();
    });
    $('#phone').blur(function () {
        isPhoneNumberValid();
    });


    $("form").submit(function (event) {
        event.preventDefault();
        isNameValid();

        if (nameValid) {
            $('#newsletter label').hide();
            window.location = 'index.html'
        } else {
            alert();
        }
    });

    // Validate Email
    /* 
        let isEmailValid;
        function isFormValid() {
            $('#email').keyup(function () {
                let email = $('#email').val();
                let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
                if (regex.test(email)) {
                    $('#newsletter label').hide();
                    isEmailValid = true;
                } else if (email === '') {
                    $('#newsletter label').show();
                    $('#newsletter label').text('please enter your Email');
                    isEmailValid = false;
                } else {
                    $('#newsletter label').show();
                    $('#newsletter label').text('please enter valid Email');
                    isEmailValid = false;
                }
                return isEmailValid;
            });
        }
    
        $("form").submit(function (event) {
            event.preventDefault()
            if (isEmailValid) {
                $('#newsletter label').hide();
                window.location = 'assets/php/newsletter.php'
            } else {
                $('#newsletter label').show();
                $('#newsletter label').text('please enter valid Email');
            }
        });
    
     */


});