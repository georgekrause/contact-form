document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const successWindow = window.open('', 'Success', 'width=300,height=400');
        successWindow.document.getElementsByClassName('success-message')[0].innerHTML;
    });
});