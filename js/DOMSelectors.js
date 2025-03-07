console.log("DOMSelectors.js is loaded....");

console.log(document);

// 1. Selects using element ID
const heading = document.getElementById("heading");
console.log(heading);

// 2. Selects elements by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// 3. Select elements by tag name
const tags = document.getElementsByTagName("div");
console.log(tags);

// 4. Select the first element that matches a specific CSS Selector(s)
const querySelectors = document.querySelector("#heading");
console.log(querySelectors);

// 5. Select all elements that match a specific CSS selector(s) - return NodeList
const querySelectorAll = document.querySelectorAll(".box h2");
console.log(querySelectorAll);

