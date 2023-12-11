document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.querySelector(".header-container");
    const slides = document.querySelectorAll('.slide');
    const sliderLine = document.querySelector('.slider__line')
    const leftArrow = document.querySelector('.slider__leftArrow');
    const rightArrow = document.querySelector('.slider__rightArrow');
    const sliderIndiсators = document.querySelectorAll('.indiсator');
    const progresses = document.querySelectorAll('.progress');
    const activeIndicatorOfSlide = document.querySelector('.progress');
    const sliderContainer = document.querySelector('.slider__container');
    const slide = document.querySelector('.slide');
    const body = document.body;
    let getWidthOfSlide = slide.clientWidth;
    let position = 0;
    let indicatorIndex = 0;
    
    let x1 = null;
    let y1 = null;

    //carousel

    const animationEndListener = function (e) {
        console.log('animationEndListener called');
        console.log('Animation onEnd: ' + e.target.parentElement.dataset.index);
        let index = parseInt(e.target.parentElement.dataset.index);
        indicatorIndex = index;

        for (let indicator of sliderIndiсators) {
            indicator.firstElementChild.classList.remove('progress');
        }
        if (index === sliderIndiсators.length - 1) {
            index = -1;
        }

        console.log('progress will be added to ' + (index + 1));
        sliderIndiсators[index + 1].firstElementChild.classList.add('progress');
        nextSlide();
    }

    document.addEventListener('animationend', animationEndListener);

    sliderLine.addEventListener('mouseenter', function (e) {
        let progress = document.querySelector('.progress');
        progress.style.animationPlayState = 'paused';

    })
    sliderLine.addEventListener('mouseleave', function (e) {
        let progress = document.querySelector('.progress');
        progress.style.animationPlayState = 'running';
    })

    sliderLine.addEventListener('touchstart', function (e) {
        progress = document.querySelector('.progress');
        progress.style.animationPlayState = 'paused';

    })
    sliderLine.addEventListener('touchend', function (e) {
        progress = document.querySelector('.progress');
        progress.style.animationPlayState = 'running';
    })
    sliderContainer.addEventListener('touchstart', handleTouchStart);
    console.log('touchstart');
    function handleTouchStart(e) {
        const touchStart = e.touches[0];
        x1 = touchStart.clientX;
        y1 = touchStart.clientY;
    }

    sliderContainer.addEventListener('touchmove', handleTouchMove);
    console.log('touchmove');
    function handleTouchMove(e) {
        const touchMove = e.touches[0];
        let x2 = touchMove.clientX;
        let y2 = touchMove.clientY;
        if (!x1 || !y1) {
            return false;
        }
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                switchCouruselToRight();
            } else {
                switchCouruselToLeft();
            }
        }
        x1 = null;
        y1 = null;
    }

    const nextSlide = () => {
        if (position < (sliderIndiсators.length - 1) * getWidthOfSlide) {
            position += getWidthOfSlide;
            console.log(position);
            indicatorIndex++;
        } else {
            position = 0;
            indicatorIndex = 0;
        }
        sliderLine.style.left = -position + 'px';
    }


    const prevSlide = () => {
        if (position > 0) {
            position -= getWidthOfSlide;
            indicatorIndex--;
        } else {
            position = (sliderIndiсators.length - 1) * getWidthOfSlide;
            indicatorIndex = sliderIndiсators.length - 1;
        }
        sliderLine.style.left = -position + 'px';
    }

    function switchCouruselToRight() {
        // console.log(indicatorIndex + 'до перелистывания');
        nextSlide()
        // console.log(indicatorIndex + "после перелистывания");
        if (indicatorIndex === 0) {
            sliderIndiсators[indicatorIndex + 2].firstElementChild.classList.remove('progress');
        } else {
            sliderIndiсators[indicatorIndex - 1].firstElementChild.classList.remove('progress');
        }
        sliderIndiсators[indicatorIndex].firstElementChild.classList.add('progress');
    }

    function switchCouruselToLeft() {
        // console.log(indicatorIndex + 'до перелистывания');
        prevSlide();
        // console.log(indicatorIndex + "после перелистывания");
        if (indicatorIndex === 2) {
            sliderIndiсators[indicatorIndex - 2].firstElementChild.classList.remove('progress');
        } else {
            sliderIndiсators[indicatorIndex + 1].firstElementChild.classList.remove('progress');
        }
        sliderIndiсators[indicatorIndex].firstElementChild.classList.add('progress');
    }

    rightArrow.addEventListener('click', switchCouruselToRight);
    leftArrow.addEventListener('click', switchCouruselToLeft);


    

})