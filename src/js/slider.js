function slickslide() {
  $(function () {
    $(".js-slider").slick({
      draggable: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
      initialSlide: 0,
      slidesToShow: 2,
      slidesToScroll: 1,
      fade: false,
      arrows: true,
      arrows: true, // 矢印を表示する
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev"></button>', // 前の矢印のHTMLを指定
      nextArrow: '<button type="button" class="slick-next"></button>', // 次の矢印のHTMLを指定
      responsive: [
        {
          breakpoint: 769, //モニターの横幅が769px以下の見せ方
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}
slickslide();
