document.addEventListener('DOMContentLoaded', function () {
    const openModalRequestCallBtn = document.querySelector('.bottom-services_request-call');
    const modalRequestCall = document.querySelector('.modal_request-call');
    const successModalBtn = document.querySelector('.request-call-modal_send-request');
    const openSuccessModal = document.querySelector('.modal_success');
    const closeBtn = document.getElementsByClassName('close');
    const showProductMenu = document.getElementsByClassName('productMenu')[0];
    const hideSpan = document.getElementsByClassName('mainBanner')[0];
    const hideMainBanner = document.getElementsByClassName('mainBannerImage')[0];
    const commonMainMenuSelector = document.querySelectorAll('.commonSpanMainMenu');
    const arrowMainMenu = document.querySelectorAll('.left');

    // hideMainBanner.addEventListener('mouseover', () => {
    //     showNewImageRight.style.display = 'block';
    //     showNewImageLeft.style.display = 'block';
    // });
    //
    // hideMainBanner.addEventListener('mouseleave', () => {
    //     showNewImageRight.style.display = 'none';
    //     showNewImageLeft.style.display = 'none';
    // });

    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = 'visible';
    }


    openModalRequestCallBtn.addEventListener('click', () => {
        modalRequestCall.style.display = 'flex';
        disableScroll();
    });

    successModalBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openSuccessModal.style.display = 'flex';
        disableBlock();
    });

    if (closeBtn.length > 0) {
        const firstCloseBtn = closeBtn[0];
        const secondCloseBtn = closeBtn[1];
        const threeCloseBtn = closeBtn[2];

        firstCloseBtn.addEventListener('click', () => {
            modalRequestCall.style.display = 'none';
            enableScroll();
        });

        secondCloseBtn.addEventListener('click', () => {
            openSuccessModal.style.display = 'none';
            enableScroll();
        });

        threeCloseBtn.addEventListener('click', () => {
            openSuccessModal.style.display = 'none';
            enableScroll();
        });
    }

    function disableBlock() {
        modalRequestCall.style.display = 'none';
    }

    function oneEvent(background, backgroundSize) {
        hideMainBanner.style.backgroundImage = background;
        hideMainBanner.style.backgroundSize = backgroundSize;
    }

    commonMainMenuSelector.forEach((commonMainMenu, index) => {
        commonMainMenu.addEventListener('click', () => {
            arrowMainMenu.forEach((arrow, idx) => {
                if (idx !== index) {
                    arrow.style.transform = 'rotate(-225deg)';
                }
            });

            if (arrowMainMenu[index].style.transform === 'rotate(-135deg)') {
                arrowMainMenu[index].style.transform = 'rotate(-225deg)';
                showProductMenu.style.display = 'none';
                hideSpan.style.display = 'flex';
                hideMainBanner.style.display = 'flex';
            } else {
                arrowMainMenu[index].style.transform = 'rotate(-135deg)';
                showProductMenu.style.display = 'flex';
                hideSpan.style.display = 'none';
                hideMainBanner.style.display = 'none';
            }
        });
    });
})