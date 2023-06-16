document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const menuButton = document.querySelector("#menuButton");
  const menuCircles = document.querySelectorAll("#menuButton circle");
  const menuRect = document.querySelectorAll("#menuButton rect");
  const headerBg = document.querySelector("#header-bg");
  const modal = document.querySelector("#modal");
  const searchBtn = document.querySelector("#searchBtn");

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

  searchBtn.addEventListener("click", function () {
    modal.showModal();
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

// tag
document.addEventListener("DOMContentLoaded", function () {
  // 手風琴效果
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;
      const accordionItem = button.parentElement;

      // 閉閉所有其他面板
      document.querySelectorAll(".accordion-content").forEach((content) => {
        if (content !== accordionContent) {
          content.style.maxHeight = null;
          // accordionContent.classList.remove("py-3");
          content.previousElementSibling
            .querySelector(".accordion-add")
            .classList.remove("hidden");
          content.previousElementSibling
            .querySelector(".accordion-minus")
            .classList.add("hidden");
          content.previousElementSibling
            .querySelector("span")
            .classList.remove("!text-primary-dark");
        }
      });

      // 如果當前面板已經打開，我們需要將其關閉
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
        // accordionContent.classList.remove("py-3");
        button.querySelector(".accordion-add").classList.remove("hidden");
        button.querySelector(".accordion-minus").classList.add("hidden");
        button.querySelector("span").classList.remove("!text-primary-dark");
      } else {
        // 否則，我們需要打開當前面板，並關閉其他所有面板
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        // accordionContent.classList.add("py-3");
        button.querySelector(".accordion-add").classList.add("hidden");
        button.querySelector(".accordion-minus").classList.remove("hidden");
        button.querySelector("span").classList.add("!text-primary-dark");
      }
    });
  });
});
// tag end
