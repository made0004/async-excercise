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

/
 */
        GetPronunciationDictionaryMetadataResponseModelPermissionOnResource()
    console.log('Body was clicked!');
