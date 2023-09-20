document.addEventListener("DOMContentLoaded", () => {
  function isMobile() {
    return window.innerWidth < 768; // 768px未満の場合、スマートフォンとみなす
  }

  // ファーストビューに戻ったかどうかを示すフラグ
  let isPastFirstView = false;

  // 監視する要素（この例では ".js-sticky-banner" 要素）
  const stickyBanner = document.querySelector(".js-sticky-banner");

  // ボタンの高さ（283px）を設定
  // const buttonHeight = 283;

  // スクロールイベントハンドラ
  window.addEventListener("scroll", () => {
    // ウィンドウのスクロール位置を取得
    const scrollY = window.scrollY;

    // ファーストビューの高さを設定（100vhからボタンの高さを引く）
    // const firstViewHeight = window.innerHeight - buttonHeight;
    const firstViewHeight = window.innerHeight;

    // ファーストビューを過ぎたかどうかを判定
    if (isMobile()) {
      // スマートフォンの場合、最初からクラスを付与する
      const firstCBtn = stickyBanner.querySelector(".c-btn:nth-child(1)");
      firstCBtn.classList.add("c-btn--green");

      const secondCBtn = stickyBanner.querySelector(".c-btn:nth-child(2)");
      secondCBtn.classList.add("c-btn--pink");
    } else if (!isPastFirstView && scrollY >= firstViewHeight) {
      // 1個目の.c-btn要素にc-btn--greenクラスを追加
      const firstCBtn = stickyBanner.querySelector(".c-btn:nth-child(1)");
      firstCBtn.classList.add("c-btn--green");

      // 2個目の.c-btn要素にc-btn--pinkクラスを追加
      const secondCBtn = stickyBanner.querySelector(".c-btn:nth-child(2)");
      secondCBtn.classList.add("c-btn--pink");

      isPastFirstView = true; // フラグを設定して再度クラスが追加されないようにする
    } else if (isPastFirstView && scrollY < firstViewHeight) {
      // ファーストビューに戻った場合、クラスを削除
      const firstCBtn = stickyBanner.querySelector(".c-btn:nth-child(1)");
      firstCBtn.classList.remove("c-btn--green");

      const secondCBtn = stickyBanner.querySelector(".c-btn:nth-child(2)");
      secondCBtn.classList.remove("c-btn--pink");

      isPastFirstView = false; // フラグを設定して再度クラスが削除されないようにする
    }
  });
});
