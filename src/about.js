import "./header";
import "./gotop";

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
});
