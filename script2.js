function onReady() {

  // watch an element
  // for a behavior
  // and when that beavhior happens
  // do some code, I've specificed

  let potatoButtonElement = document.getElementById('potato_button');
  console.log('an element looks like', potatoButtonElement);
  console.log('and it\'s type is', typeof potatoButtonElement);

  let h1Element = document.querySelector('h1');
  console.log('an element looks like', h1Element);
  h1Element.innerText = 'Did this work?';

  let pElement = document.querySelector('p');
  console.log('p inner text:', pElement.innerText);
  console.log('p inner html:', pElement.innerHTML);

  // my goal is to insert my list, as the last thing in the body element
  // I want to use this tool: .appendChild(childElement)
  // _________.appendChild(______)
  // TheParentElementIWantToAddTo.appendChild(TheElmentIWantToAdd)
  // ______.appendChild(theUlElementIMade);

  // I need the body Element, to fill in that blank

  let bodyElement = document.querySelector('body');
  console.log("body element", bodyElement);

  bodyElement.innerHTML = `
      <ul>
        <li>Simone</li>
        <li>Sebastian</li>
      </ul>`;

}
// Will call onReady() when the page loads.
onReady()


// console is an object
// let console = {
//   log: function() { print stuff to the screen}

// // }

// document is an object
// let document {
//   innerText: "Event-Driven Programming"
// }

// h1Element.innerText

