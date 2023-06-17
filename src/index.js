import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 主輪播
  const swiperMain = new Swiper(".swiper-main", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-main-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-main-next",
      prevEl: ".swiper-button-main-prev",
    },
    // on: {
    //   slideChange: function () {
    //     let activeIndex = this.activeIndex;
    //     let bullets = document.querySelectorAll(".swiper-pagination-bullet");
    //     for (let i = 0; i < bullets.length; i++) {
    //       if (Math.abs(i - activeIndex) > 2) {
    //         // 只顯示靠近 active bullet 的 6 個 bullets
    //         bullets[i].style.display = "none";
    //       } else {
    //         bullets[i].style.display = "";
    //       }
    //     }
    //   },
    // },
  });

  // 頁籤切換
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const tabPanes = document.getElementsByClassName("tab-pane");

  // 初始設定
  tabPanes[0].classList.remove("hidden");
  tabPanes[1].classList.add("hidden");

  tab1.addEventListener("click", function () {
    tabPanes[0].classList.remove("hidden");
    tabPanes[1].classList.add("hidden");
    tab2.classList.remove("button-active");
    tab2.classList.add("button-normal");
    tab1.classList.remove("button-normal");
    tab1.classList.add("button-active");
  });

  tab2.addEventListener("click", function () {
    tabPanes[0].classList.add("hidden");
    tabPanes[1].classList.remove("hidden");
    tab1.classList.remove("button-active");
    tab1.classList.add("button-normal");
    tab2.classList.remove("button-normal");
    tab2.classList.add("button-active");
  });
});
