//slider
const slides = document.querySelectorAll('#slides .testimonials__slide');
let currentSlide = 0;
const nextSlide = () => {
    slides[currentSlide].className = 'testimonials__slide';
    currentSlide = (currentSlide + 1 ) % slides.length;
    slides[currentSlide].className = 'testimonials__slide visible';
}
const sliderSpinner = (ms) => setInterval(nextSlide, ms);
sliderSpinner(5000);


//burger
const collBtn = document.getElementById("collapsible-btn");
const content = document.getElementById("collapsible-ul");
collBtn.addEventListener("click", () => {
    collBtn.classList.toggle("active");
    content.style.display === "flex" ?  content.style.display = "none" : content.style.display = "flex";
});


//fetch json (section 2)
const getDataFromJSON = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log('Succesfully! Data:', result);
    } catch (error) {
        console.log('Failed:', error);  
    }
}
getDataFromJSON('https://dmitrijpedan.github.io/active_box/section2_data.json');