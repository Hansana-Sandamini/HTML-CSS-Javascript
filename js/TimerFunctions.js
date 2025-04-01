console.log("TimerFunctions.js is loaded....");

// ================= setTimeout(function, delay) - Executes a function, after waiting a specified milliseconds

// setTimeout(function () {
//     console.log("Hello World...");
// }, 5000)

// const timeoutId = setTimeout(function () {
//     console.log("Hello World...");
// }, 5000)
// clearTimeout(timeoutId);


// ================= setInterval(function, interval) - Same as setTimeout(), but repeats the executes body getting the interval

setInterval(function() {
    console.log("Hello World...");
}, 1000);

const intervalId = setInterval(function() {
    console.log("Hello World...");
}, 1000);
clearInterval(intervalId);