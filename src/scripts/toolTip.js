const navBarOptions = document.querySelectorAll('.navigate-bar_option');

navBarOptions.forEach((navBarOption) => {
    const toolTypeBlock = navBarOption.querySelector('.navigate-bar_tooltype');

    navBarOption.addEventListener('mouseover', () => {
        if (toolTypeBlock) {
            toolTypeBlock.style.display = 'block';
        }
    });

    navBarOption.addEventListener('mouseleave', () => {
        if (toolTypeBlock) {
            toolTypeBlock.style.display = 'none';
        }
    });

    if (toolTypeBlock) {
        toolTypeBlock.addEventListener('mouseleave', () => {
            toolTypeBlock.style.display = 'none';
        });
    }
});