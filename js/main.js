// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', init);

function init() {
    // adding listener to button
    const btn = document.querySelector('#btn-trigger');
    btn.addEventListener('click', handleClick);
}

function handleClick(ev) {
    // random number generator between 0 and 1
    const decision = Math.round(Math.random());

    if(decision === 0) {
        // Call the color function
        getColor()
            .then(setRandomColor)
            .catch(console.error);
    } else {
        // Call message function
        addMessage()
            .then(appendNewMessage)
            .catch(console.error);
    }
}

function getColor() {
  return new Promise((resolve, reject) => {
    // Wait 1-2 seconds
    const delay = getRandomInt(1000, 2000); 

    setTimeout(() => {
      // Generate random hex value
      const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      resolve(hexColor);
    }, delay);
  });
}
/* function to set random color */
function setRandomColor(color) {
    document.body.style.backgroundColor = color;
}

function appendNewMessage(message) {
    const main = document.querySelector('main');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    main.appendChild(newParagraph);
}
    p.textContent = message;
    main.appendChild(p);
}
  return new Promise((resolve, reject) => {
    // Wait 1-2 seconds
    const delay = getRandomInt(1000, 2000);