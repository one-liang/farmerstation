import "./header";
import "./gotop";

// tag
document.addEventListener("DOMContentLoaded", function () {
  // 浮動 banner
  let banner = document.getElementById("banner");
  banner.style.top = -banner.offsetHeight + "px";

  window.addEventListener("scroll", function () {
    if (window.innerWidth >= 1024) {
      if (window.pageYOffset > 250) {
        banner.style.top = "72px";
      } else {
        banner.style.top = -banner.offsetHeight + "px";
      }
    } else {
      if (window.pageYOffset > 150) {
        banner.style.top = "52px";
      } else {
        banner.style.top = -banner.offsetHeight + "px";
      }
    }
  });

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

  function limitTextLength(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  let hotTag = document.querySelectorAll(".hotTag");

  for (let i = 0; i < hotTag.length; i++) {
    let text = hotTag[i].textContent;
    hotTag[i].textContent = limitTextLength(text, 15);
  }
});
// tag end
