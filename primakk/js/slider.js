/**
 * Small Slider
 * 
 * @author Toropov Alexandr <https://aletoropov.ru/>
 */

var slides = document.querySelectorAll('#slider .slide_item');
var currentSlide = 0;
var slideinterval = setInterval(nexSlide, 7000);

function nexSlide() {
    slides[currentSlide].className = 'slide_item';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide_item slide-show';
}