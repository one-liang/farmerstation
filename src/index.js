document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#menu");
  const menuButton = document.querySelector("#menuButton");
  const menuCircles = document.querySelectorAll("#menuButton circle");
  const menuRect = document.querySelectorAll("#menuButton rect");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("!translate-y-0");

    menuCircles.forEach(item => {
      item.classList.toggle("hidden");
    })

    menuRect.forEach(item => {
      item.classList.toggle("opacity-0");
    })
  })
})