window.onload = function () {
  const loadingElement = document.getElementById("loading");

  // 確保動畫流暢，可以使用 setTimeout
  setTimeout(function () {
    loadingElement.style.opacity = "0";

    setTimeout(function () {
      loadingElement.style.display = "none";
    }, 500); // 這裡的500是漸變動畫的持續時間，單位是毫秒
  }, 500);
};
