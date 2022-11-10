$(".galeria").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
});



var button = document.getElementById('read_button');


button.addEventListener('click', function () {

    var card = document.querySelector('#b1');


    card.classList.toggle('active');

    if (card.classList.contains('active')) {

        return button.textContent = 'Read less';
    }

    button.textContent = 'Read more';
});

