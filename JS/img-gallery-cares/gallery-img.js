$(document).ready(function () {
    const galleryContainer = $('#gallery');
    const modalCarousel = $('#carouselGallery');
    const jsonPath = '/js/img-gallery-cares/db-gallery.json';

    // Fetch JSON and populate gallery + modal
    fetch(jsonPath)
        .then(res => res.json())
        .then(data => {
            galleryContainer.empty();
            modalCarousel.empty();

            data.gallery.forEach((item, index) => {
                // Add to main masonry gallery
                galleryContainer.append(`
                    <div class="masonry-item-post" data-index="${index}">
                        <img src="${item.src}" alt="${item.alt}">
                    </div>
                `);

                // Add to modal carousel
                modalCarousel.append(`
                    <div class="item">
                        <img src="${item.src}" alt="${item.alt}">
                    </div>
                `);
            });

            // Initialize Owl Carousel
            modalCarousel.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                autoplay: true
            });

            // Click event to open modal and jump to slide
            galleryContainer.on('click', '.masonry-item-post', function () {
                const index = $(this).data('index');
                $('#imageModal').modal('show');
                modalCarousel.trigger('to.owl.carousel', [index, 300]);
            });
        })
        .catch(err => console.error('Error loading gallery JSON:', err));
});
