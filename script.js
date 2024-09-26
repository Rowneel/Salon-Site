window.addEventListener("scroll", function () {
  var banner = document.querySelector(".main_banner");
  var scrollPosition = window.scrollY;

  banner.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var mainMenu = document.querySelector(".main-menu");

  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
    if (mainMenu.classList.contains("active")) {
      menuToggle.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
