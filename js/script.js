// carousel
const slides = document.querySelector('.carousel-slides');
const images = document.querySelectorAll('.carousel-slides img');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;
let autoPlayInterval;

// menggeser slide
function updateCarousel() {
    const slideWidth = images[0].clientWidth;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`
};

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    resetAutoPlay();
});

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    resetAutoPlay();
});

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000);
};

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
};

// update ukuran saat window diubah
window.addEventListener('resize', updateCarousel);

startAutoPlay();


// hamburger menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});