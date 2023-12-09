document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.querySelector(".header-container");
    // const slide = document.querySelector(".slide");
    const slides = document.querySelectorAll('.slide');
    const sliderLine = document.querySelector('.slider__line')
    const leftArrow = document.querySelector('.slider__leftArrow');
    const rightArrow = document.querySelector('.slider__rightArrow');
    const sliderIndiсators = document.querySelectorAll('.indiсator');
    const progresses = document.querySelectorAll('.progress');
    const activeIndicatorOfSlide = document.querySelector('.progress');

    let position = 0;
    let indicatorIndex = 0;
    let wayProgress = 0;
    let prevIndex = 0 //for checking index of progress bar


//hamburger
    document.getElementById("hamburger").addEventListener("click", function () {
        headerContainer.classList.toggle("open__menu");
    })
    document.getElementById("header__nav").addEventListener("click", function (e) {
        // console.log(e.target.className)
        if (e.target.matches('.link') || e.target.matches('.header__menubtn') || e.target.matches('.coffeeCupT')){
            headerContainer.classList.toggle("open__menu")
        }
    })

    //carousel
    function slideOnMouseHover (index) {

    }
    sliderLine.addEventListener('mousemove', function () {
        // console.log(e.target.classList);
    })

    // const fillingOfProgressBar = setInterval(animation, 5000);
    function progressAnimation(index) {
        if (index == prevIndex) {
             wayProgress += 10;
        progresses[index].style.width = wayProgress + 'px';
        } else {
            if (index )
            wayProgress = 0;
            progresses[index - 1].style.width = 0;
            progresses[index].style.width = wayProgress + 'px';
            
        }
       prevIndex = index;
        //   s
    }

    //linking the slider to its progress bar, adding class 'progress'
const indicatorOfSlide = (index) => {
        for (indicator of sliderIndiсators){
            indicator.firstElementChild.classList.remove('progress');
        }
        sliderIndiсators[index].firstElementChild.classList.add('progress');
        // progressAnimation(index);
    }


    // adding class 'slideActive' to slide
const slideActive = (index) => {
        for (slide of slides){
            slide.classList.remove('slideActive');
        }
        slides[index].classList.add('slideActive');
    }

    sliderLine.addEventListener('mouseenter', function (e) {
        activeSlide = document.querySelector('.slideActive');
        progress = document.querySelector('.progress');
        progress.style.animationPlayState = 'paused';
})
    sliderLine.addEventListener('mouseleave', function (e) {
        activeSlide = document.querySelector('.slideActive');
        progress = document.querySelector('.progress');
        progress.style.animationPlayState = 'running';
    })

    const nextSlide = () => {
        if (position < (sliderIndiсators.length - 1) * 480) {
        position += 480;
        indicatorIndex++;
        } else {
            position = 0;
            indicatorIndex = 0;
        }
        sliderLine.style.left = -position + 'px';
        indicatorOfSlide(indicatorIndex);
        slideActive(indicatorIndex);
    }
    
        
    const prevSlide = () => {
        if (position > 0) {
            position -= 480;
            indicatorIndex--;
        } else {
            position = (sliderIndiсators.length - 1) * 480;
            indicatorIndex = sliderIndiсators.length - 1;
        }
        sliderLine.style.left = -position + 'px';
        indicatorOfSlide(indicatorIndex);
    }
    
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);

    setInterval(() => {
        nextSlide()
    }, 5000);
//     setInterval(() => {
//         progressAnimation()
//     }, 1000);
})
// e.target.tagName