let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideIndex) {
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.getElementById(`slide${i}`);
        slide.style.display = (i === slideIndex) ? "flex" : "none";
    }
}

function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 < 1) ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
}

// Initialize slideshow
showSlide(currentSlide);
