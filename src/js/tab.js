// let tabs = Array.from(document.querySelectorAll(".js-tab"));
// let panels = Array.from(document.querySelectorAll(".js-panel"));

// const handleTabClick = (e) => {
//   // クリックされたタブのインデックスを取得
//   const tabIndex = tabs.indexOf(e.target);

//   // 全てのタブとコンテンツパネルからactiveクラスを削除
//   tabs.forEach((tab) => tab.classList.remove("is-active"));
//   panels.forEach((panel) => panel.classList.remove("is-show"));

//   // クリックされたタブと対応するコンテンツパネルにactiveクラスを追加
//   tabs[tabIndex].classList.add("is-active");
//   panels[tabIndex].classList.add("is-show");
// };

// // タブにクリックイベントを追加
// tabs.forEach((tab) => {
//   tab.addEventListener("click", handleTabClick);
// });
