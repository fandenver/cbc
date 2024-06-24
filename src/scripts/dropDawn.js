document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.bottom-header_searchField');
    const openDropDown = document.querySelector('.bottom-header_oneDropDawn');
    const options = document.querySelectorAll('.bottom-header_optionDropDawn');
    const noResultsMessage = document.querySelector('.bottom-header_optionDropDawn_no_result');
    const searchButton = document.querySelector('.bottom-header_searchButton');

    inputField.addEventListener('click', (event) => {
        event.stopPropagation();
        openDropDown.style.display = 'flex';
    });

    options.forEach(option => {
        option.addEventListener('click', function () {
            inputField.value = option.textContent;
            inputField.dispatchEvent(new Event('input'));
            openDropDown.style.display = 'none';
        })
    });

    inputField.addEventListener('input', function () {
        const searchText = inputField.value.toLowerCase();
        let hasMatchingOptions = false;

        options.forEach(option => {
            const optionText = option.textContent.toLowerCase();

            if (optionText.includes(searchText)) {
                option.style.display = 'flex';
                hasMatchingOptions = true;
            } else {
                option.style.display = 'none';
            }
        });

        searchButton.addEventListener('click', () => {
            if (searchText !== '') {
                searchButton.addEventListener('click', () => {
                    window.location.href = '../Main_Page/page_404.html';
                })
            } else {
                window.location.href = '';
            }
        });

        if (searchText === '') {
            noResultsMessage.style.display = 'none';
        } else if (hasMatchingOptions) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'flex';
        }
    });

    document.addEventListener('click', function (event) {
        const isClickInsideDropDown = openDropDown.contains(event.target);
        const isClickInsideInput = inputField.contains(event.target);

        if (!isClickInsideDropDown && !isClickInsideInput) {
            openDropDown.style.display = 'none';
        }
    });
});


