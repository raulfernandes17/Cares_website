// header scroll
let navbar = document.querySelector(".navbar-m");
let scrollBtn = document.querySelector(".scroll-button a");
let val;


window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add("header-scrolled");
    navbar.classList.add("sticky"); 
    scrollBtn.style.display = "block";
  } else {
    navbar.classList.remove("header-scrolled");
    navbar.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};



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



// document.addEventListener('DOMContentLoaded', function() {
//   let navbar = document.querySelector(".navbar-m");
//   if(!navbar) {
//     navbar.classList.remove("header-scrolled");
//         navbar.classList.add("sticky");
//         scrollBtn.style.display = "none";

//   } else {
//        navbar.classList.add("header-scrolled");
//     navbar.classList.add("sticky");
//     scrollBtn.style.display = "block";

//   }
// });












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


// owl carsoule
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 40,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"],

    autoplay: true,               // Enable autoplay
    autoplayTimeout: 3000,        // Set autoplay interval (3000ms = 3 seconds)
    autoplayHoverPause: true,     // Pause autoplay on hover 

    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 1,
        margin: 20
      },
      600: {
        items: 2,

      },
      960: {
        items: 3,

      },
      1200: {
        items: 3,

      },
      1024: {
        items: 3,

      },
      768: {
        items: 2,

      },
      425: {
        items: 1,
      }
    }

  });
});




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