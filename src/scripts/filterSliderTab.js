import {_slideToggle} from "./searchSlider.js";

const titleFilterButtons = document.querySelectorAll('.section-filter_title');

for (let index = 0; index < titleFilterButtons.length; index++) {
const titleFilterButton = titleFilterButtons[index];
    titleFilterButton.addEventListener('click', () => {
        titleFilterButton.classList.toggle('_active');
        const filterBody = titleFilterButton.nextElementSibling;
        _slideToggle(filterBody)
    })
}