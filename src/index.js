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

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 1024) {
    // 定義區域和對應的列表
    const areas = ["north", "west", "south", "east"];

    areas.forEach((area) => {
      // 指定區域元素
      const areaElement = document.querySelector(`.${area}`);
      const areaListElement = document.querySelector(`.${area}-list`);

      // 為區域元素添加 mouseover 事件監聽器
      areaElement.addEventListener("mouseover", () => {
        // 在 mouseover 時添加對應的活躍類別
        areaElement.classList.add("map-active");
        const listItems = areaListElement.querySelectorAll(".map-list-item");
        listItems.forEach((item) => {
          item.classList.add("map-list-item-active");
        });
        const title = areaListElement.querySelector(".map-list-title");
        title.classList.add("map-list-title-active");
      });

      // 為區域元素添加 mouseout 事件監聽器
      areaElement.addEventListener("mouseout", () => {
        // 在 mouseout 時移除對應的活躍類別
        areaElement.classList.remove("map-active");
        const listItems = areaListElement.querySelectorAll(".map-list-item");
        listItems.forEach((item) => {
          item.classList.remove("map-list-item-active");
        });
        const title = areaListElement.querySelector(".map-list-title");
        title.classList.remove("map-list-title-active");
      });

      // 處理區域列表 mouseover 和 mouseout 事件
      areaListElement.addEventListener("mouseover", () => {
        // 在 mouseover 時添加對應的活躍類別
        areaElement.classList.add("map-active");
        const listItems = areaListElement.querySelectorAll(".map-list-item");
        listItems.forEach((item) => {
          item.classList.add("map-list-item-active");
        });
        const title = areaListElement.querySelector(".map-list-title");
        title.classList.add("map-list-title-active");
      });

      // 為區域列表添加 mouseout 事件監聽器
      areaListElement.addEventListener("mouseout", () => {
        // 在 mouseout 時移除對應的活躍類別
        areaElement.classList.remove("map-active");
        const listItems = areaListElement.querySelectorAll(".map-list-item");
        listItems.forEach((item) => {
          item.classList.remove("map-list-item-active");
        });
        const title = areaListElement.querySelector(".map-list-title");
        title.classList.remove("map-list-title-active");
      });
    });
  }
});
