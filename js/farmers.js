!function(){var e=[,function(){window.onload=function(){var e=document.getElementById("loading");setTimeout((function(){e.style.opacity="0",setTimeout((function(){e.style.display="none"}),500)}),500)}},function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#menu"),t=document.querySelector("#menuButton"),n=document.querySelectorAll("#menuButton circle"),o=document.querySelectorAll("#menuButton rect"),i=document.querySelector("#header-bg"),c=document.querySelector("#modal"),r=document.querySelector("#searchBtn"),d=document.querySelector(".close-button");t.addEventListener("click",(function(){e.classList.toggle("!top-[52px]"),e.classList.toggle("!translate-y-0"),n.forEach((function(e){e.classList.toggle("hidden")})),o.forEach((function(e){e.classList.toggle("opacity-0")}))})),window.innerWidth<1024&&e.addEventListener("click",(function(e){e.target.classList.contains("dropdownBtn")&&e.target.nextElementSibling.classList.toggle("!block")}));var a=document.querySelectorAll(".dropdownBtn"),u=document.querySelectorAll(".dropdown-content");function s(){window.innerWidth<1024?a.forEach((function(e){e.addEventListener("click",(function(){var t=e.nextElementSibling;e.classList.toggle("text-primary");var n=e.querySelector(".add"),o=e.querySelector(".minus");t.classList.toggle("hidden"),n.classList.toggle("hidden"),o.classList.toggle("hidden")}))})):(a.forEach((function(e){e.addEventListener("mouseover",(function(){i.classList.add("fixed")})),e.addEventListener("mouseout",(function(){i.classList.remove("fixed")}))})),u.forEach((function(e){e.addEventListener("mouseover",(function(){i.classList.add("fixed")})),e.addEventListener("mouseout",(function(){i.classList.remove("fixed")}))})))}s(),window.addEventListener("resize",(function(){!function(){var e=document.getElementsByClassName("dropdown-content");if(window.innerWidth>=1024)for(var t=0;t<e.length;t++)e[t].classList.remove("!block")}(),s()})),r.addEventListener("click",(function(){c.showModal(),document.body.style.overflow="hidden"})),d.addEventListener("click",(function(){c.close(),document.body.style.overflow="auto"}))}))},function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#gotop"),n=window.innerHeight,o=!1;function i(){(window.pageYOffset||document.documentElement.scrollTop)>n?(t.classList.add("show"),o=!1):(t.classList.remove("show"),e(i))}t&&(t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){o||(e(i),o=!0)})))}))}],t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);n(1),n(2),n(3);document.addEventListener("DOMContentLoaded",(function(){["Taipei","Taoyuan","Hsinchu","Miaoli","Taichung","Changhua","Yunlin","Chiayi","Tainan","Kaohsiung","Pingtung","Yilan","Hualien","Taitung","Nantou"].forEach((function(e){if(document.querySelector(".".concat(e,"-card"))){var t=document.querySelector(".".concat(e,"-wrapper"));t&&t.classList.add("active")}}));var e=document.querySelectorAll(".wrapper"),t=document.querySelector("#section-card").offsetTop;e.forEach((function(n){n.addEventListener("click",(function(){if(e.forEach((function(e){e.classList.remove("active")})),this.classList.add("active"),window.innerWidth<1024){var n=t-60;window.scrollTo({top:n,behavior:"smooth"})}}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e,t=document.querySelector(".carousel-images"),n=t.style.left;clearInterval(e),e=setInterval((function(){-1632==(n-=1)&&(n=0),t.style.left=n+"px"}),50)}))}()}();