$(function(){
  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: false,
        }
      },
    ]
  });
  $('.reviews__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});