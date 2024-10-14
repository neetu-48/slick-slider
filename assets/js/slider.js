$(document).ready(function () {
  $('.your-class').slick({
    infinite: true,
    dots: true,
    dotsclass: "slick-dots",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    /*autoplay: true,
    autoplaySpeed: 1000,*/
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});












