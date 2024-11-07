// header scroll
let navbar = document.querySelector(".nav-m");
let scrollBtn = document.querySelector(".scroll-button a");
let val;


window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add("header-scrolled");
    navbar.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    navbar.classList.remove("header-scrolled");
    navbar.classList.add("sticky");
    scrollBtn.style.display = "none";
  }
}



// nav hide small screen
let navBar = document.querySelectorAll(".nav-link, .main-btn ");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
})






