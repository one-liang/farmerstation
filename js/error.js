!function(){var e=[,function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#menu"),t=document.querySelector("#menuButton"),n=document.querySelectorAll("#menuButton circle"),o=document.querySelectorAll("#menuButton rect"),i=document.querySelector("#header-bg"),r=document.querySelector("#modal"),c=document.querySelector("#searchBtn"),d=document.querySelector(".close-button");t.addEventListener("click",(function(){e.classList.toggle("!top-[52px]"),e.classList.toggle("!translate-y-0"),n.forEach((function(e){e.classList.toggle("hidden")})),o.forEach((function(e){e.classList.toggle("opacity-0")}))})),window.innerWidth<1024&&e.addEventListener("click",(function(e){e.target.classList.contains("dropdownBtn")&&e.target.nextElementSibling.classList.toggle("!block")}));var s=document.querySelectorAll(".dropdownBtn"),u=document.querySelectorAll(".dropdown-content");function l(){window.innerWidth<1024?s.forEach((function(e){e.addEventListener("click",(function(){var t=e.nextElementSibling;e.classList.toggle("text-primary");var n=e.querySelector(".add"),o=e.querySelector(".minus");t.classList.toggle("hidden"),n.classList.toggle("hidden"),o.classList.toggle("hidden")}))})):(s.forEach((function(e){e.addEventListener("mouseover",(function(){i.classList.add("fixed")})),e.addEventListener("mouseout",(function(){i.classList.remove("fixed")}))})),u.forEach((function(e){e.addEventListener("mouseover",(function(){i.classList.add("fixed")})),e.addEventListener("mouseout",(function(){i.classList.remove("fixed")}))})))}l(),window.addEventListener("resize",(function(){!function(){var e=document.getElementsByClassName("dropdown-content");if(window.innerWidth>=1024)for(var t=0;t<e.length;t++)e[t].classList.remove("!block")}(),l()})),c.addEventListener("click",(function(){r.showModal(),document.body.style.overflow="hidden"})),d.addEventListener("click",(function(){r.close(),document.body.style.overflow="auto"}))}))},function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#gotop"),n=window.innerHeight,o=!1;function i(){(window.pageYOffset||document.documentElement.scrollTop)>n?(t.classList.add("show"),o=!1):(t.classList.remove("show"),e(i))}t&&(t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){o||(e(i),o=!0)})))}))}],t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);n(1),n(2)}()}();