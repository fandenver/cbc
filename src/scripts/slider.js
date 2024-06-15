document.addEventListener('DOMContentLoaded', function () {
    const showNewImageRight = document.querySelector('.slider-page_arrow-button')[0];
    const showNewImageLeft = document.querySelector('.slider-page_arrow-button')[0];
    const textImage = document.querySelector('.slider-page_text-block');
    const circleColorOne = document.querySelector('ul.slider-page_pagination-container > li:nth-child(1)');
    const circleColorTwo = document.querySelector('ul.slider-page_pagination-container > li:nth-child(2)');
    const circleColorThree = document.querySelector('ul.slider-page_pagination-container > li:nth-child(3)');
    const circleColorFour = document.querySelector('ul.slider-page_pagination-container > li:nth-child(4)');
    const circleColorFive = document.querySelector('ul.slider-page_pagination-container > li:nth-child(5)');
    let currentImageIndex = 0;

    const imagePaths = [
        '../images/hat/mainBannerImage.png',
        '../images/mapTransition/oneClickImage.png',
        '../images/mapTransition/twoClickImage.png',
        '../images/mapTransition/threeClickImage.png',
        '../images/mapTransition/fourClickImage.png'
    ];

    const circleArr = [
        circleColorOne,
        circleColorTwo,
        circleColorThree,
        circleColorFour,
        circleColorFive
    ];

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
                    el.classList.add('circlePaginationOne');
                } else {
                    el.classList.remove('circlePaginationOne');
                }
            });
        });
    });

    showNewImageRight.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;

        oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

        const prevIndex = currentImageIndex === 0 ? imagePaths.length - 1 : currentImageIndex - 1;
        circleArr[prevIndex].classList.remove('circlePaginationOne');
        circleArr[currentImageIndex].classList.add('circlePaginationOne');

        if (currentImageIndex === 2) {
            textImage.style.color = 'black';
        } else {
            textImage.style.color = '';
        }
    });

    showNewImageLeft.addEventListener('click', () => {
        circleArr[currentImageIndex].classList.remove('circlePaginationOne');

        currentImageIndex = (currentImageIndex === 0) ? imagePaths.length - 1 : currentImageIndex - 1;
        oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

        circleArr[currentImageIndex].classList.add('circlePaginationOne');

        if (currentImageIndex === 2) {
            textImage.style.color = 'black';
        } else {
            textImage.style.color = '';
        }
    });
})