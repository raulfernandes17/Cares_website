$(function () {
  const modalCarousel = $('#carouselGallery');

  fetch('/js/img-gallery-cares/db-gallery.json')
    .then(res => res.json())
    .then(data => {
      modalCarousel.empty();

      data.gallery.forEach((item, index) => {
        // Decide section based on folder name in src
        let section = '';
        if (item.src.includes('teachers-images')) section = 'teachers';
        if (item.src.includes('training-imgaes')) section = 'training';
        if (item.src.includes('school-memories')) section = 'school';

        // Append to the right gallery
        $(`[data-section="${section}"]`).append(`
                    <div class="masonry-item-post" data-index="${index}">
                        <img src="${item.src}" alt="${item.alt}">
                    </div>
                `);

        // Always add to modal carousel
        modalCarousel.append(`
                    <div class="item"><img src="${item.src}" alt="${item.alt}"></div>
                `);
      });

      // Init carousel
      modalCarousel.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        responsive: {
         425: { items: 1 },
        }
      });

      // Open modal on click
      $('.masonry-img-gallery').on('click', '.masonry-item-post', function () {
        const index = $(this).data('index');
        $('#imageModal').modal('show');
        modalCarousel.trigger('to.owl.carousel', [index, 300]);
      });
    });
});
