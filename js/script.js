document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.querySelector('.left-btn');
    const nextBtn = document.querySelector('.right-btn');

    if (!carousel || images.length === 0) {
        console.warn("Carousel not found on this page.");
        return;
    }

    let index = 0;

    function showImage(i) {
        carousel.style.transform = `translateX(${-i * 100}%)`;
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    nextBtn?.addEventListener('click', nextImage);
    prevBtn?.addEventListener('click', prevImage);


    setInterval(nextImage, 4000);
});
