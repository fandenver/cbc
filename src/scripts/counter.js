let quantityButtons = document.querySelectorAll('.description-product-cart_counter-btn');

if (quantityButtons.length > 0) {
    quantityButtons.forEach((quantityButton) => {
            quantityButton.addEventListener('click', function () {
                let value = parseInt(quantityButton.closest('.description-product-cart').querySelector('input').value);
                if (quantityButton.classList.contains('description-product-cart_counter-btn_plus')) {
                    value++;
                } else {
                    value = value - 1;
                    if (value < 1) {
                        value = 1;
                    }
                }
                quantityButton.closest('.description-product-cart').querySelector('input').value = value;
            });
    })
}