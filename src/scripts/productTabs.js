const infoTabs = document.querySelectorAll('.info-product-cart_tab');
const infoBlocks = document.querySelectorAll('.info-product-cart_block');

infoTabs.forEach((infoTab, index) => {
    infoTab.addEventListener('click', () => {
        const currentTabIndex = index;

        infoTabs.forEach((item) => {
            item.classList.remove('_active');
        })

        infoBlocks.forEach((item) => {
            item.classList.remove('_active');
        })

        infoTab.classList.add('_active');
        infoBlocks[currentTabIndex].classList.add('_active');
    })
})