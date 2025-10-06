window.addEventListener('load', function () {
  fetch('./JS/achievment/db.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('card-container');
      container.innerHTML = ''; // Clear any placeholders

      data.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card cards-achev-algin col-md-4 mb-4';

        cardElement.innerHTML = `
          <a href="${card.link}" style="text-decoration: none;">
          <img src="${card.image}" style="width:100%" class="card-img-top" alt="${card.title}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-danger">${card.badge}</span>
            </div>
            <h5 class="card-title">${card.title}</h5>
            <div class="d-flex align-items-center mb-2 mt-4">
              <a href="#" class="text-muted me-auto">${card.source}</a>
              <small class="text-muted ms-3">${card.date}</small>
            </div>
          </div>
        `;

        container.appendChild(cardElement);
      });

      // ✅ Initialize Owl Carousel after cards are added
      $('#card-container').owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        margin: 40,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          320: { items: 1 },
          425: { items: 1 },
          600: { items: 2 },
          768: { items: 2 },
          960: { items: 3 },
          1024: { items: 3 },
          1200: { items: 3 }
        }
      });
    })
    .catch(error => {
      console.error('Error fetching card data:', error);
    });
});
