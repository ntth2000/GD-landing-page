// SHOW MENU
const navToggle = document.querySelector(".nav__toggle"),
  navClose = document.querySelector(".nav__close"),
  navMenu = document.getElementById("nav__menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// SCROLL UP
const scrollUpBtn = document.getElementById("scroll-up");

function scrollUp() {
  if (this.scrollY > 300) {
    scrollUpBtn.classList.add("show-scrollup");
  } else {
    scrollUpBtn.classList.remove("show-scrollup");
  }
}

scrollUpBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", scrollUp);
// show header
const header = document.getElementById("header");

function showHeader() {
  if (this.scrollY > 0) {
    header.classList.add("show-header");
  } else {
    header.classList.remove("show-header");
  }
}

window.addEventListener("scroll", showHeader);
