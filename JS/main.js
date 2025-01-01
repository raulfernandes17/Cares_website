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
    navbar.classList.add("sticky");
    scrollBtn.style.display = "none";
  }
}





// nav hide small screen & open dropdown menu

let navBar = document.querySelectorAll(".nav-link, .main-btn");
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
$('.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  margin: 40,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"],

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



})