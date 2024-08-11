const itemsTab = document.querySelectorAll('.buttons-side_item');
const itemsTabCart = document.querySelector('.buttons-side_item_cart');
const sideButtons = document.querySelector('.buttons-side')

if (sideButtons) {
    const originalCartBackground = itemsTabCart.style.background;

    itemsTab.forEach((itemTab) => {
        itemTab.addEventListener('click', function () {
            itemsTab.forEach((item) => {
                item.classList.remove('_active');
            });

            if (itemTab === itemsTabCart) {
                itemsTabCart.classList.add('_active');
                itemsTabCart.style.background = originalCartBackground;
            } else {
                itemsTabCart.classList.remove('_active');
                itemsTabCart.style.background = 'url("../../src/images/hat/cart.png") center no-repeat'
            }

            itemTab.classList.add('_active');
        });
    });
}
