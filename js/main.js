$(function() {

    $(".header__nav a").on("click", function (e) {
                e.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-left"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.nav__btn, .nav__list a').on('click', function (){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });
    

    var mixer = mixitup('.portfolio__content');

});