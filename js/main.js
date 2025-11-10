/ Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', init);

function init() {
    // Your initialization code - click listener
    console.log('DOM is ready. Initialization complete.');
}

/**
 *  handle  click event                 
 */
function handleClick(ev) {
    // random number generator
    console.log('Body was clicked!');
    