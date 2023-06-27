import "./header";
import "./gotop";

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function (dropdown) {
    const btn = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');

    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      menu.classList.toggle('active');
    });

    window.addEventListener('click', function () {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
});
