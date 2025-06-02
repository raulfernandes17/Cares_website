// header scroll


// let navbar = document.querySelector(".navbar-m");
// let scrollBtn = document.querySelector(".scroll-button a");
// let val;


// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 20) {
//     navbar.classList.add("header-scrolled");
//     navbar.classList.add("sticky"); 
//     scrollBtn.style.display = "block";
//   } else {
//     navbar.classList.remove("header-scrolled");
//     navbar.classList.remove("sticky");
//     scrollBtn.style.display = "none";
//   }
// };



// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 20) {
//     navbar.classList.add("header-scrolled");
//     navbar.classList.add("sticky");
//     scrollBtn.style.display = "block";
//   } else {
//     navbar.classList.remove("header-scrolled");
//     navbar.classList.add("sticky");
//     scrollBtn.style.display = "none";
//   }
// }




document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar-m");
  let scrollBtn = document.querySelector(".scroll-button a");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      navbar.classList.add("header-scrolled");
      navbar.classList.add("sticky"); 
      // scrollBtn.style.display = "block";
    } else {
      navbar.classList.remove("header-scrolled");
      navbar.classList.remove("sticky");
      // scrollBtn.style.display = "none";
    }
  };
});





// nav hide small screen & open dropdown menu
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function (event) {
    // Check if the clicked element is inside a dropdown
    if (!a.classList.contains("dropdown-toggle") && !a.closest(".dropdown-menu")) {
      navCollapse.classList.remove("show");
    }
  });
});



// onclick openModal carsoul img
function openModal(imgElement) {
  const modalImageslider = document.getElementById("modalImageslider");
  modalImageslider.src = imgElement.src;  // Set modal image source to clicked image's source
  const imageModalCarousel = new bootstrap.Modal(document.getElementById('imageModalCarousel'));
  imageModalCarousel.show();
}


// menu / header section
window.addEventListener('load', function () {
  fetch('../partials/header.html') // Adjust the path
    .then(response => response.text())
    .then(data => {
      console.log(data)
      document.getElementById('header_wrapper').innerHTML = data;
    })
    .catch(error => console.error("Error loading the header:", error));

});


// footer section
window.addEventListener('load', function () {
  fetch('../partials/footer.html') // Adjust the path
    .then(response => response.text())
    .then(data => {
      console.log(data)
      document.getElementById('main-footer').innerHTML = data;
    })
    .catch(error => console.error("Error loading the footer:", error));

});