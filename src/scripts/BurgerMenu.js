const burgerButtons = document.querySelectorAll('.services-header_icon-menu');
const burgerMenus = document.querySelectorAll('.services-header_burger-menu');

for (let index = 0; index < burgerButtons.length; index++) {
    const burgerButton = burgerButtons[index];
    const burgerMenu = burgerMenus[index];
    let menuVisible = false;

    burgerButton.addEventListener('click', function (event) {
        if (menuVisible) {
            burgerMenu.style.display = 'none';
            burgerButton.classList.remove('_active');
            menuVisible = false;
        } else {
            burgerMenu.style.display = 'block';
            burgerButton.classList.add('_active');
            menuVisible = true;
        }
    });

    document.addEventListener('click', function (event) {
        if (burgerMenu && (event.target !== burgerButton && !burgerButton.contains(event.target)
            && event.target !== burgerMenu && !burgerMenu.contains(event.target))) {
            burgerMenu.style.display = 'none';
            burgerButton.classList.remove('_active');
            menuVisible = false;
        }
    });
}

const burgerButtonsFooter = document.querySelectorAll('.footer_icon-menu');
const burgerMenusFooter = document.querySelectorAll('.footer_burger-menu');

for (let index = 0; index < burgerButtons.length; index++) {
    const burgerButton = burgerButtonsFooter[index];
    const burgerMenu = burgerMenusFooter[index];
    let menuVisible = false;

    burgerButton.addEventListener('click', function (event) {
        if (menuVisible) {
            burgerMenu.style.display = 'none';
            burgerButton.classList.remove('_active');
            menuVisible = false;
        } else {
            burgerMenu.style.display = 'block';
            burgerButton.classList.add('_active');
            menuVisible = true;
        }
    });

    document.addEventListener('click', function (event) {
        if (burgerMenu && (event.target !== burgerButton && !burgerButton.contains(event.target)
            && event.target !== burgerMenu && !burgerMenu.contains(event.target))) {
            burgerMenu.style.display = 'none';
            burgerButton.classList.remove('_active');
            menuVisible = false;
        }
    });
}
