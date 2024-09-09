$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        mobileFirst: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 407,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 408,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 784,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});