$(document).ready(function () {
    $('.form__icon').click(()=>{
        $('.far').toggleClass("fa-eye fa-eye-slash");
        var input = $('#pass');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $('.signin-btn').click(()=>{
        $('.signin-wrapper').addClass('show');
    })
    $('.close-btn').click(()=>{
        $('.signin-wrapper').removeClass('show');
    });
});