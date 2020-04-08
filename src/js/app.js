const slides = document.querySelectorAll('#slides .testimonials__slide');
let currentSlide = 0;
const nextSlide = () => {
    slides[currentSlide].className = 'testimonials__slide';
    currentSlide = (currentSlide + 1 ) % slides.length;
    slides[currentSlide].className = 'testimonials__slide visible';
}
const sliderSpinner = (ms) => setInterval(nextSlide, ms);
sliderSpinner(5000);