function gallerySlide() {
  $(function () {
    $(".js-slider-gallery").slick({
      draggable: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
      initialSlide: 0,
      slidesToShow: 2,
      fade: false,
      arrows: true,
      dots: true, // ドットナビゲーションを表示する
      arrows: true, // 矢印を表示する
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev"></button>', // 前の矢印のHTMLを指定
      nextArrow: '<button type="button" class="slick-next"></button>', // 次の矢印のHTMLを指定
      responsive: [
        {
          breakpoint: 769, //モニターの横幅が769px以下の見せ方
          settings: {
            slidesToShow: 1, //スライドを画面に2枚見せる
            slidesToScroll: 1, //1回のスクロールで2枚の写真を移動して見せる
          },
        },
      ],
    });
  });
}
gallerySlide();
