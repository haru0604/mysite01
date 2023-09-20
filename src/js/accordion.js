document.addEventListener("DOMContentLoaded", function () {
  var accordion = document.querySelector(".js-accordion");
  var subItems = document.querySelector(".c-nav-menu__sub-items");

  accordion.addEventListener("click", function () {
    accordion.classList.toggle("is-active");
    // スライドアニメーションを制御するため、max-heightを切り替える
    if (subItems.style.maxHeight === "0px" || subItems.style.maxHeight === "") {
      subItems.style.maxHeight = subItems.scrollHeight + "px";
    } else {
      subItems.style.maxHeight = "0px";
    }
  });
});
