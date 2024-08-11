const sliderPage = document.querySelector('.slider-page');

if (sliderPage) {
    document.addEventListener('DOMContentLoaded', function () {
        const sliderButtonRight = document.getElementsByClassName('slider-page_arrow-button')[0];
        const sliderButtonLeft = document.getElementsByClassName('slider-page_arrow-button')[1];
        const textImage = document.querySelector('.slider-page_text-block > span');
        const circleSliderOne = document.querySelector('ul.slider-page_pagination-container > li:nth-child(1)');
        const circleSliderTwo = document.querySelector('ul.slider-page_pagination-container > li:nth-child(2)');
        const circleSliderThree = document.querySelector('ul.slider-page_pagination-container > li:nth-child(3)');
        const circleSliderFour = document.querySelector('ul.slider-page_pagination-container > li:nth-child(4)');
        const circleSliderFive = document.querySelector('ul.slider-page_pagination-container > li:nth-child(5)');
        const slider = document.querySelector('.slider-page');
        let currentImageIndex = 0;

        slider.addEventListener('mouseover', () => {
            sliderButtonRight.style.display = 'flex';
            sliderButtonLeft.style.display = 'flex';
        });

        slider.addEventListener('mouseleave', () => {
            sliderButtonRight.style.display = 'none';
            sliderButtonLeft.style.display = 'none';
        });

        const imagePaths = [
            '../../src/images/hat/mainBannerImage.png',
            '../../src/images/mapTransition/oneClickImage.png',
            '../../src/images/mapTransition/twoClickImage.png',
            '../../src/images/mapTransition/threeClickImage.png',
            '../../src/images/mapTransition/fourClickImage.png'
        ];

        const circleArr = [
            circleSliderOne,
            circleSliderTwo,
            circleSliderThree,
            circleSliderFour,
            circleSliderFive
        ];

        function oneEvent(background, backgroundSize) {
            slider.style.backgroundImage = background;
            slider.style.backgroundSize = backgroundSize;
        }

        circleArr.forEach((circle, index) => {
            circle.addEventListener('click', () => {
                currentImageIndex = index;
                oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

                if (currentImageIndex === 2) {
                    textImage.style.color = 'black';
                } else {
                    textImage.style.color = '';
                }

                circleArr.forEach((el, idx) => {
                    if (idx === currentImageIndex) {
                        el.classList.add('_active');
                    } else {
                        el.classList.remove('_active');
                    }
                });
            });
        });

        sliderButtonLeft.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % imagePaths.length;

            oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

            const prevIndex = currentImageIndex === 0 ? imagePaths.length - 1 : currentImageIndex - 1;
            circleArr[prevIndex].classList.remove('_active');
            circleArr[currentImageIndex].classList.add('_active');

            if (currentImageIndex === 2) {
                textImage.style.color = 'black';
            } else {
                textImage.style.color = '';
            }
        });

        sliderButtonRight.addEventListener('click', () => {
            circleArr[currentImageIndex].classList.remove('_active');

            currentImageIndex = (currentImageIndex === 0) ? imagePaths.length - 1 : currentImageIndex - 1;
            oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

            circleArr[currentImageIndex].classList.add('_active');

            if (currentImageIndex === 2) {
                textImage.style.color = 'black';
            } else {
                textImage.style.color = '';
            }
        });
    })
}