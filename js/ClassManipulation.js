console.log("ClassManipulation.js is loaded...");

const heading = document.getElementById("heading");
console.log(heading.classList);

// 1. classList.add() - Adds one or more classes to an element
heading.classList.add("new-class", "highlight");
console.log(heading.classList);

// 2. classList.remove() - Removes one or more classes to an element
heading.classList.remove("highlight");
console.log(heading.classList);

// 3. classList.toggle() - Toggles between a class name
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);


