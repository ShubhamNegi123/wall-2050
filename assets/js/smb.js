$(function(){

    $('.smb .img-wrapper img').click(function(){
        let img = $(this).attr('src');
        $('.model-image img').attr('src',img);
        $('.model-image-wrapper').css({
            display : 'flex'
        });
    });



    $('.model-image-wrapper .fa-circle-xmark').click(function(){
        $('.model-image-wrapper').css({
            display : 'none'
        });                 
    });

    
});