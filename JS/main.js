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



// products page
window.addEventListener('load', function () {
  fetch('../../Partials/products.html')
    .then(response => response.text())
    .then(data => {
      console.log(data)
      document.getElementById('products-developed').innerHTML = data;
    })
    .catch(error => console.error("Error loading the footer:", error));

});





// circulars-and-orders
window.addEventListener('load', function () {

  const years = [
    {
      id: 'circulars-orders-AY-2025-2026',
      file: './circulars-and-orders/circulars-academic-year-2025-2026.html'
    },
    {
      id: 'circulars-orders-AY-2024-2025',
      file: './circulars-and-orders/circulars-academic-year-2024-2025.html'
    },
    {
      id: 'circulars-orders-AY-2023-2024',
      file: './circulars-and-orders/circulars-academic-year-2023-2024.html'
    },
    {
      id: 'circulars-orders-AY-2022-2023',
      file: './circulars-and-orders/circulars-academic-year-2022-2023.html'
    },
    {
      id: 'circulars-orders-AY-2021-2022',
      file: './circulars-and-orders/circulars-academic-year-2021-2022.html'
    }
  ];

  years.forEach(item => {
    fetch(item.file)
      .then(response => response.text())
      .then(data => {
        const container = document.getElementById(item.id);
        if (container) {
          container.innerHTML = data;
        }
      })
      .catch(error => console.error(`Error loading ${item.file}:`, error));
  });

});



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



// competition-model page {owl carousel / model}

document.addEventListener("DOMContentLoaded", function () {

  const folder = "/images/uploads/2023/11/";
  const images = [
    "CompetationModel-Day-1.jpg",
    "CompetationModel-Day-4.jpg",
    "CompetationModel-Day-5.jpg",
    "CompetationModel-StateLevel-1.jpg",
    "CompetationModel-StateLevel-2.jpg",
    "CompetationModel-StateLevel-3.jpg",
  ];

  const carousel = document.getElementById("competition-gallery");

  // Create carousel
  images.forEach(img => {
    carousel.innerHTML += `<div class="item"><img src="${folder + img}"></div>`;
  });

  // Owl init
  $("#competition-gallery").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ]
  });

  // Modal
  const modal = new bootstrap.Modal(document.getElementById('imageModal-competition'));

  // Click image → open modal
  document.querySelectorAll('.competition-model-img').forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.show();
      $('#competition-gallery').trigger('to.owl.carousel', [index, 300]);
    });
  });

  // Reset zoom on slide change
  $('#competition-gallery').on('changed.owl.carousel', function () {
    zoomed = false;
    document.querySelectorAll('#competition-gallery img').forEach(img => {
      img.style.transform = "scale(1)";
    });
  });

});


// Zoom function
let zoomed = false;

function zoomImage() {

  // Get active item from BOTH galleries
  const activeItem = document.querySelector(
    '#competition-gallery .owl-item.active, #teacher-training-model-gallery .owl-item.active, #ai-ml-extension-gallery .owl-item.active'
  );

  if (!activeItem) return;

  const img = activeItem.querySelector('img');
  if (!img) return;

  img.style.transform = zoomed ? "scale(1)" : "scale(1.8)";
  img.style.transition = "0.3s";

  zoomed = !zoomed;
}




// teacher-training-model


document.addEventListener("DOMContentLoaded", function () {

  const folder = "/images/uploads/2023/11/";
  const images = [
    // Teacher Training Model Gallery
    "TrainingModel-CARES.jpg",
    "TrainingModel-CARES-1.jpg",
    "TrainingModel-CARES-2.jpg",
    "TrainingModel-CARES-3.jpg",
    "TrainingModel-CARES-4.jpg",
    "TrainingModel-CARES-5.jpg",
    "TrainingModel-CARES-6.jpg",
    "TrainingModel-CARES-7.jpg",


  ];

  const carousel = document.getElementById("teacher-training-model-gallery");

  // Create carousel
  images.forEach(img => {
    carousel.innerHTML += `<div class="item"><img src="${folder + img}"></div>`;
  });

  // Owl init
  $("#teacher-training-model-gallery").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ]
  });

  // Modal
  const modal = new bootstrap.Modal(document.getElementById('training-model-gallery'));

  // Click image → open modal
  document.querySelectorAll('.competition-model-img').forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.show();
      $('#teacher-training-model-gallery').trigger('to.owl.carousel', [index, 300]);
    });
  });

  // Reset zoom on slide change
  $('#teacher-training-model-gallery').on('changed.owl.carousel', function () {
    zoomed = false;
    document.querySelectorAll('#teacher-training-model-gallery img').forEach(img => {
      img.style.transform = "scale(1)";
    });
  });

});






// ai-ml-extension page {owl carousel / model}

document.addEventListener("DOMContentLoaded", function () {

  const folder = "/images/uploads/2023/11/";
  const images = [
    "AI-ML-Extension-1.jpg",
    "AI-ML-Extension-2.jpg",
    "AI-ML-Extension-3.jpg",
  ];

  const carousel = document.getElementById("ai-ml-extension-gallery");

  // Create carousel
  images.forEach(img => {
    carousel.innerHTML += `<div class="item"><img src="${folder + img}"></div>`;
  });

  // Owl init
  $("#ai-ml-extension-gallery").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ]
  });

  // Modal
  const modal = new bootstrap.Modal(document.getElementById('ai-ml-Modal-extension'));

  // Click image → open modal
  document.querySelectorAll('.competition-model-img').forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.show();
      $('#ai-ml-extension-gallery').trigger('to.owl.carousel', [index, 300]);
    });
  });

  // Reset zoom on slide change
  $('#ai-ml-extension-gallery').on('changed.owl.carousel', function () {
    zoomed = false;
    document.querySelectorAll('#ai-ml-extension-gallery img').forEach(img => {
      img.style.transform = "scale(1)";
    });
  });

});





// image open in modal
document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".open-image");
  const modalImg = document.getElementById("modalImage-circulars-and-orders");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const imgSrc = this.getAttribute("href");
      modalImg.src = imgSrc;

      const modal = new bootstrap.Modal(document.getElementById('imageModal-zoom-circulars-orders'));
      modal.show();
    });
  });

  let zoomed = false;

  modalImg.addEventListener("click", function () {
    if (!zoomed) {
      this.style.transform = "scale(2)";
      this.style.cursor = "zoom-out";
    } else {
      this.style.transform = "scale(1)";
      this.style.cursor = "zoom-in";
    }
    zoomed = !zoomed;
  });

});