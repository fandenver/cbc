import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
        }
    }
}

if (document.querySelector('.products-slider')) {
    let productSlider = new Swiper('.products-slider_body', {
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        speed: 800,
        loop: false,
        navigation: {
            nextEl: '.products-slider_arrow_right',
            prevEl: '.products-slider_arrow_left'
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1212: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4
            },
        },
    });
}

if (document.querySelector('.product-cart_slider')) {
    let productSlider = new Swiper('.product-cart_slider-body', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
        loop: false,
        navigation: {
            nextEl: '.product-cart_arrow_right',
            prevEl: '.product-cart_arrow_left'
        },
    });
}