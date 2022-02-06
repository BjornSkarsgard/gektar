import $ from "jquery";
import slick from "slick-carousel";

$('.slick-carousel').slick({
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true
          }
        },

        {
            breakpoint: 9999,
            settings: "unslick"
          }
    ]
})