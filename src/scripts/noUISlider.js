function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const priceSlider = document.querySelector('.price-filter_slider');

if (priceSlider) {
    noUiSlider.create(priceSlider, {
        start: [0, 1130000],
        connect: true,
        tooltips: [
            {
                to: (value) => numberWithSpaces(parseInt(value)),
                from: (value) => value.replace(/ /g, '')
            },
            {
                to: (value) => numberWithSpaces(parseInt(value)),
                from: (value) => value.replace(/ /g, '')
            }
        ],
        range: {
            'min': [0],
            'max': [1130000]
        }
    });

    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');

    priceStart.addEventListener('change', function () {
        priceSlider.noUiSlider.set([priceStart.value, null]);
    });

    priceEnd.addEventListener('change', function () {
        priceSlider.noUiSlider.set([null, priceEnd.value]);
    });
}

