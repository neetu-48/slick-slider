$(document).ready(function () {
  $('.your-class').slick({
    infinite: true,
    dots: true,
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

/*Testimonials*/
$(document).ready(function () {
  $('.home-slider').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1.66,
    /*autoplay: true,
    autoplaySpeed: 1000,*/
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1.66
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1.66
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.happy').slick({
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '.slick-next-arrow',
    prevArrow: '.slick-prev-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true

        }
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});







