console.log("DataTypes.js is loaded...");

// ============================================ Primitive Data Types ================================================

// ==== 1. Number - Represents both integer and floating-points ====
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

// ==== 2. String - Represents a sequence of characters ====
let customerName = "John Doe";
console.log(typeof customerName);

// ==== 3. Boolean ====
let isLogged = true;
console.log(typeof isLogged);

// ==== 4. Undefined - Represents an undefined value ====
let x;
console.log(x);
console.log(typeof x);

// ==== 5. Null ====
let y = null;
console.log(y);
console.log(typeof y);

// ==== 6. BigInt ====
let bigIntValue = 1234567890123456789n;
let number = 1234567890123456789;
console.log(typeof bigIntValue);
console.log(typeof number);

console.log("==========================================================================");
// ============================== Non-Primitive Data Types (Reference Data Types) ===========================================

// ==== 7. Object - Represents a collection of key-value pairs====
let person = {
    firstName: "John",
    lastName: "Doe",
    age:30
}
console.log(person);
console.log(typeof person);

// ==== 8. Array - Represents a list of elements====
let colors = ["Red", "Blue", "Green"];
console.log(colors);
console.log(typeof colors);

// ==== 9. Function - Represents a function====
function greet() {
    console.log("Hello World...");
}
greet();
console.log(typeof greet);

// ==== 10. Date - Represents a date and time ====
let today = new Date();
console.log(today);
console.log(typeof today);
