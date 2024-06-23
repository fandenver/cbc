const burgerButtons = document.querySelectorAll('.icon-menu');

for (let index = 0; index < burgerButtons.length; index++) {
    const burgerButton = burgerButtons[index];
    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle('_active')
    })
}