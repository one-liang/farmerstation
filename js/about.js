document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const menuButton = document.querySelector("#menuButton");
  const menuCircles = document.querySelectorAll("#menuButton circle");
  const menuRect = document.querySelectorAll("#menuButton rect");
  const headerBg = document.querySelector("#header-bg");

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
  const dropdownContent = document.querySelectorAll(".dropdown-content");

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
    } else {
      dropdownBtns.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
          headerBg.classList.add("fixed");
        });

        btn.addEventListener("mouseout", () => {
          headerBg.classList.remove("fixed");
        });
      });

      dropdownContent.forEach((item) => {
        item.addEventListener("mouseover", () => {
          headerBg.classList.add("fixed");
        });

        item.addEventListener("mouseout", () => {
          headerBg.classList.remove("fixed");
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
