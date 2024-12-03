// script for the image gallery slideshow in the aesthetic webpages
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slides');
    if (index >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }
    if (index < 0) {
        slideIndex = slides.length - 1; // Loop to the last slide
    }
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    slideIndex += direction;
    showSlides(slideIndex);
}

// Initialize the slideshow
showSlides(slideIndex);
