function onReady() {

    // watch an element
    // for a behavior
    // and when that beavhior happens
    // do some code, I've specificed

    let potatoButton = document.getElementById('potato_button');
}

function handlePotatoClick() {
    // this works, for one potato
    // go get the thing from the dom, where I want to add my potato
    // in other words, go get the <div> element
    let theDivIWantToAddTo = document.querySelector('div');

    // now, take that div element, and replace the text inside with '🥔'.
    theDivIWantToAddTo.innerHTML += `<span onclick="deletePotato(event)">🥔</span>`;

    // if I want more, there are ways, we'll get to them...
}

function handleUnicornClick() {
    let theDivIWantToAddTo = document.querySelector('div');
    theDivIWantToAddTo.innerText += '🦄';

}

// how do we assasinate a unicorn?
// lets start with potatoes
// if you click on a potato, we want it to go away
// first.... the potato has to be there, otherwise, this makes no sense
// we want to attach a click handler to our potatoes, and listen for a click
// when that click happens, we want to run a function to delete the potato

function deletePotato(event) {

    // i know how to change things on the DOM
    // i know how to add things to the DOM
    // how do I get rid of things?

    event.target.remove();
}


// Will call onReady() when the page loads.
onReady()
