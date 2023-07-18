import "./loading";
import "./header";
import "./gotop";

document.addEventListener("DOMContentLoaded", function () {
  // 定義地區列表
  let regions = [
    "Taipei",
    "Taoyuan",
    "Hsinchu",
    "Miaoli",
    "Taichung",
    "Changhua",
    "Yunlin",
    "Chiayi",
    "Tainan",
    "Kaohsiung",
    "Pingtung",
    "Yilan",
    "Hualien",
    "Taitung",
    "Nantou",
  ];

  // 對每個地區進行操作
  regions.forEach((region) => {
    // 檢查是否有地區的卡片
    let cardElement = document.querySelector(`.${region}-card`);

    // 如果有地區的卡片
    if (cardElement) {
      // 將 active class 加入對應的 wrapper
      let wrapperElement = document.querySelector(`.${region}-wrapper`);
      if (wrapperElement) {
        wrapperElement.classList.add("active");
      }
    }
  });

  let wrappers = document.querySelectorAll(".wrapper");
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      // 移除所有 wrapper 的 active 類別
      wrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });

      // 將 active 類別添加到被點擊的 wrapper
      this.classList.add("active");
    });
  });
});

// 跑馬燈
function load() {
  let list = document.querySelector(".carousel-images");
  let left = list.style.left;
  let timer;
  function move() {
    clearInterval(timer);
    timer = setInterval(() => {
      left = left - 1;
      console.log(list.clientLeft);
      if (left == -(8 * 180 + 2 * 96)) {
        left = 0;
      }
      list.style.left = left + "px";
    }, 50);
  }

  move();
}
document.addEventListener("DOMContentLoaded", load);
