const hamburger = document.querySelector("span.hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  close.style.display = "block";
  menu.style.display = "block";
  hamburger.style.display = "none";
});

close.addEventListener("click", function () {
  close.style.display = "none";
  menu.style.display = "none";
  hamburger.style.display = "block";
});

