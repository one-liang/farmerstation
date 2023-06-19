import "./header";
import "./gotop";

// 主輪播
const swiperList = new Swiper(".swiper-list", {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-list-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-list-next",
    prevEl: ".swiper-button-list-prev",
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
