import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
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

  // 活力好站
  const swiperRelated = new Swiper(".swiper-related", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        loop: true,
        freeMode: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-related-next",
      prevEl: ".swiper-button-related-prev",
    },
  });

  // 近期活動
  const swiperActivity = new Swiper(".swiper-activity", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        loop: true,
        freeMode: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-activity-next",
      prevEl: ".swiper-button-activity-prev",
    },
  });
});
