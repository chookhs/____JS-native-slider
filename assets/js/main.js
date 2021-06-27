
const slides = document.querySelectorAll('.slide');
const pauseBtn = document.querySelector('#pause-btn');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');


let currentSlide = 0;
let timerId = null;
let slidesCount = slides.length;
let isPlaying = true;
let interval = 2000;

function gotoNth (n) {
    slides[currentSlide].classList.toggle('active');

    currentSlide = (currentSlide + 1) % slidesCount;

    slides[currentSlide].classList.toggle('active');
}


function gotoNext () {
    gotoNth(currentSlide + 1);
}

function gotoPrev () {
    gotoNth(currentSlide - 1);
}

function pause () {
    pauseBtn.innerHTML = 'Play';
    clearInterval(timerId);
    isPlaying = false;
}

function play () {
    pauseBtn.innerHTML = 'Pause';
    timerId = setInterval(gotoNext, interval);
    isPlaying = true;
}

const pausePlay = () => isPlaying ? pause() : play();


timerId = setInterval(gotoNext, interval);

pauseBtn.addEventListener('click', pausePlay);
prevBtn.addEventListener('click', gotoPrev);
nextBtn.addEventListener('click', gotoNext);