document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const successWindow = window.open('', 'Success', 'width=300,height=200');
        successWindow.document.getElementsByClassName('container')[0].innerHTML = '<h1>Success</h1>';
    });
});