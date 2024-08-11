const errorInfoBlock = document.querySelector('.error-page_info-block');

if (errorInfoBlock) {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('errorBlockBtn').addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    });
}