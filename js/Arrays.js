console.log("Arrays.js is loaded...");

// 1. Creating an Array

// Using Array Literal
let colors = ["Red", "Green", "Blue"];
console.log(colors);

// Using new keyword and Array Constructor
let colors2 = new Array("Red", "Green", "Blue");
console.log(colors2);

let myArray = [10, 'Kamal', true, undefined, null, {name: 'John'}, [1, 2, 3]];
console.log(myArray);

// 2. Accessing Elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); // undefined

// 3. Modifying Elements
colors[0] = 'Yellow';
console.log(colors);

// 4. Array Length
console.log(colors.length);

//  Built-in Array Functions

let fruits = ["Apple", "Banana", "Mango", "Orange"];

// 5. push() - Adds elements to the end of the array and returns the new length of the array
fruits.push('Graphs');
console.log(fruits);

// 6. pop() - Removes the last element of a array
fruits.pop(fruits);
console.log(fruits);

// 7. unshift() - Adds new elements to the begining of the array
fruits.unshift('Strawberry');
console.log(fruits);

// 8. shift() - Removes the first element of the array
fruits.shift();
console.log(fruits);

// 9. concat() - Joins two or more arrays
let vegetables = ['Tomato', 'Potato', 'Onion'];
let items = fruits.concat(vegetables);
console.log(items);

// 10. forEach()
items.forEach(function (item) {
    console.log(item);
})

// 11. map()
let upperCaseItems = items.map(item => item.toUpperCase());
console.log(upperCaseItems);

// 12. filter()
let filteredItems = items.filter(item => item.length > 5);
console.log(filteredItems);