// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', init);

function init() {
    // adding listener to button
    const btn = document.querySelector('#btn-trigger');
    btn.addEventListener('click', handleClick);
}

function handleClick(ev) {
    // random number generator between 0 and 1
    const randomNum = Math.floor(Math.random());

    console.log('Body was clicked!');
