document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const menuButton = document.querySelector("#menuButton");
  const menuCircles = document.querySelectorAll("#menuButton circle");
  const menuRect = document.querySelectorAll("#menuButton rect");

  // 漢堡選單
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("!top-16");
    menu.classList.toggle("!translate-y-0");

    menuCircles.forEach((item) => {
      item.classList.toggle("hidden");
    });

    menuRect.forEach((item) => {
      item.classList.toggle("opacity-0");
    });
  });

  if (window.innerWidth < 1024) {
    menu.addEventListener("click", function (event) {
      if (event.target.classList.contains("dropdownBtn")) {
        let dropdownContent = event.target.nextElementSibling;
        dropdownContent.classList.toggle("!block");
      }
    });
  }

  // menu 展開收合
  const dropdownBtns = document.querySelectorAll(".dropdownBtn");

  function dropdownEvent() {
    if (window.innerWidth < 1024) {
      dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const content = btn.nextElementSibling;
          btn.classList.toggle("text-primary");
          const addIcon = btn.querySelector(".add");
          const minusIcon = btn.querySelector(".minus");

          content.classList.toggle("hidden");
          addIcon.classList.toggle("hidden");
          minusIcon.classList.toggle("hidden");
        });
      });
    }
  }

  dropdownEvent();

  // menu resize 後關閉
  function adjustDropdowns() {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024) {
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("!block");
      }
    }
  }

  window.addEventListener("resize", function () {
    adjustDropdowns();
    dropdownEvent();
  });
});

// gotop
let requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

document.addEventListener("DOMContentLoaded", function () {
  const goTopButton = document.querySelector("#gotop");
  const windowViewPortHeight = window.innerHeight;
  let isRequestingAnimationFrame = false;

  if (!goTopButton) {
    return;
  }

  goTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });

  function filterGoTopButtonVisibility() {
    let windowPageYOffset =
      window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add("show");
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove("show");
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
});
// gotop end

// 頁籤切換
const tabButtons = document.getElementsByClassName("tab-button");

// 對每個按鈕元素添加點擊事件監聽器
for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    // 取得按鈕索引
    let tabIndex = Array.from(tabButtons).indexOf(this);

    // 隱藏所有的 tab 內容
    let tabPanes = document.getElementsByClassName("tab-pane");
    for (let j = 0; j < tabPanes.length; j++) {
      tabPanes[j].classList.add("hidden");
    }

    // 顯示選中的 tab 內容
    tabPanes[tabIndex].classList.remove("hidden");

    // 移除所有按鈕的 active 類別
    for (let k = 0; k < tabButtons.length; k++) {
      tabButtons[k].classList.remove("button-active");
      tabButtons[k].classList.add("button-normal");
    }

    // 將選中的按鈕設置為 active
    this.classList.remove("button-normal");
    this.classList.add("button-active");
  });
}
