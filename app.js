// 1. Get the element with the `elements` class from the DOM and save it to
const element = document.querySelector("h3");
//console.log(element);

//    a variable.
// 2. Add the class `this-is-fun` to the .elements node

element.classList.add("this-is-fun");
//console.log(element);

// 3. Add the class `disco-party` to the .elements node
element.classList.add("disco-party");
//console.log(element);
// 4. Remove the class `elements` from the .elements node
element.classList.remove("elements");
console.log(element);
