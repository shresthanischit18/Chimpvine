let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const paginationButtons = document.querySelectorAll('.pagination-btn');
const intervalTime = 5000; 

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    paginationButtons.forEach((button, i) => {
        if (i === currentSlide) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    showSlide(index);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function autoSlide() {
    nextSlide();
}

showSlide(currentSlide);
paginationButtons[0].classList.add('active');

setInterval(autoSlide, intervalTime);