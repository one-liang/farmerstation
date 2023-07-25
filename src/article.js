import "./loading";
import "./header";
import "./gotop";

// article
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

  // 猜你喜歡
  const swiperMore = new Swiper(".swiper-more", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    autoHeight: true,
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
      nextEl: ".swiper-button-more-next",
      prevEl: ".swiper-button-more-prev",
    },
  });

  // 近期活動
  const swiperActivity = new Swiper(".swiper-activity", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    autoHeight: true,
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

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    const btn = dropdown.querySelector(".dropdown-btn");
    const menu = dropdown.querySelector(".dropdown-menu");

    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      menu.classList.toggle("active");
    });

    window.addEventListener("click", function () {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  });
});
// article end
