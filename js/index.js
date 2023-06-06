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
  const dropdownBtns = document.querySelectorAll('.dropdownBtn');

  dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      btn.classList.toggle("text-primary");
      const addIcon = btn.querySelector('.add');
      const minusIcon = btn.querySelector('.minus');

      content.classList.toggle('hidden');
      addIcon.classList.toggle('hidden');
      minusIcon.classList.toggle('hidden');
    });
  });


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

  window.addEventListener("resize", adjustDropdowns);
});
