const slides = document.querySelectorAll('#slides .testimonials__slide');
let currentSlide = 0;
const nextSlide = () => {
    slides[currentSlide].className = 'testimonials__slide';
    currentSlide = (currentSlide + 1 ) % slides.length;
    slides[currentSlide].className = 'testimonials__slide visible';
}
const sliderSpinner = (ms) => setInterval(nextSlide, ms);
sliderSpinner(5000);


const collBtn = document.getElementById("collapsible-btn");
const content = document.getElementById("collapsible-ul");

collBtn.addEventListener("click", () => {
    collBtn.classList.toggle("active");
    content.style.display === "flex" ?  content.style.display = "none" : content.style.display = "flex";
});