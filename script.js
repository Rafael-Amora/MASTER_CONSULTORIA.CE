$(".galeria").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
});


var x = true;
$('#card1').click(function () {
    if ($(window).width() > 768)
        if (x) {
            x = false;
            $(this).animate({
                height: "440px",
            }, 500);
            $('#c1').css('display', 'block');
            $('#seta1').css('transform', 'rotate(90deg)');

        } else {
            x = true;
            $(this).animate({
                height: "188px",
            }, 500);
            $('#c1').css('display', 'none')
            $('#seta1').css('transform', 'rotate(0deg)');
        }

});