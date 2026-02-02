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
  fetch('../../Partials/header.html') // Adjust the path
    .then(response => response.text())
    .then(data => {
      console.log(data)
      document.getElementById('header_wrapper').innerHTML = data;
    })
    .catch(error => console.error("Error loading the header:", error));

});





// footer section
window.addEventListener('load', function () {
  fetch('../../Partials/footer.html') // Adjust the path
    .then(response => response.text())
    .then(data => {
      console.log(data)
      document.getElementById('main-footer').innerHTML = data;
    })
    .catch(error => console.error("Error loading the footer:", error));

});


// class-vi-regular page - Concept Overview- Scratch Accordion
// const mainPlayer = document.getElementById('mainPlayer');
// const thumbnails = document.querySelectorAll('.thumb-wrapper');

// thumbnails.forEach(wrapper => {
//   wrapper.addEventListener('click', () => {
//     const videoId = wrapper.getAttribute('data-video');
//     mainPlayer.src = `https://www.youtube.com/embed/${videoId}`;

    // Update active border
//     thumbnails.forEach(w => w.classList.remove('active'));
//     wrapper.classList.add('active');
//   });
// });




// class-vi-regular page - Concept Overview- Scratch Accordion Dynamic youtube video

// For each thumbnail group
document.querySelectorAll('.thumb-group').forEach(group => {
  
  // Get the player for this group
  const playerId = group.dataset.player;
  const mainPlayer = document.getElementById(playerId);

  // Get thumbnails inside this group
  const thumbnails = group.querySelectorAll('.thumb-wrapper');

  thumbnails.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const videoId = wrapper.dataset.video;

      // Change video
      mainPlayer.src = `https://www.youtube.com/embed/${videoId}`;

      // Active border only in this group
      thumbnails.forEach(t => t.classList.remove('active'));
      wrapper.classList.add('active');
    });
  });
});
