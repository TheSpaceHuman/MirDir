
$(document).ready(function() {
    $("#form1").submit(function() {
        var phone_reg = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
        var phone = $("input[name='phone']").val();
        if (phone_reg.test(phone)) {
            var form_data = $(this).serialize();
            var par = $(this).closest('.modal-content') ;
            $.ajax({
                type: "POST",
                url: "send_form.php",
                data: form_data,
                success: function() {
                    $('#form1 input').val('');
                    $('.modal-header .close', par).trigger( "click" );
                    $('.message').toggle();
                    $('.message .success').toggle();
                    $('.sweet-alert h2').text('Спасибо! Ваши контакты успешно отправлены.');
                },
                error:  function(xhr, str){
                    // alert('Возникла ошибка: ' + xhr.responseCode);
                    $('.message').toggle();
                    $('.message .error ').toggle();
                    $('.sweet-alert h2').text('Не удалось отправить форму!');
                }
            });
        } else {
            $('.message').toggle();
            $('.message .error ').toggle();
            $('.sweet-alert h2').text('Телефон введен неправильно');
        };
        return false; // вырубaeм стaндaртную oтпрaвку фoрмы
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>120){
            $('.scrollup-btn').fadeIn(900)
        }else{
            $('.scrollup-btn').fadeOut(700)
        }
    });

});
$(document).on("click", ".sweet-alert .confirm", function(){
    $('.message').toggle();
    $('.message .success').css('display', 'none');
    $('.message .error').css('display', 'none');
    $('.sweet-alert h2').text('');
    $('.sweet-alert p').html('')
})


