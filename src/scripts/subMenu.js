const menuLinks = document.querySelectorAll('.menu-page_item');
const submenu = document.querySelector('.sub-menu-page');

submenu.addEventListener('mouseleave', (event) => {
    if (!event.relatedTarget || !event.relatedTarget.closest('.menu-page_item')) {
        submenu.style.display = 'none';
    }
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('mouseover', () => {
        submenu.style.display = 'flex';
    });
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('mouseleave', (event) => {
        if (!event.relatedTarget || !event.relatedTarget.closest('.sub-menu-page')) {
            submenu.style.display = 'none';
        }
    });
});