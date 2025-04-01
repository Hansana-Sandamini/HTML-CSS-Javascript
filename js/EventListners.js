console.log("EventListners.js is loaded....");

// const box = document.querySelector('.box');

// ================================== Mouse Events ===================================

// ====single click event====
// box.addEventListener('click', function () {
//     console.log("Clicked the box...");
// })

// ====Double click event=====
// box.addEventListener('dblclick', function () {
//     console.log("Double clicked the box ...");
// })

// ====Mouse-down event=====
// box.addEventListener('mousedown', function() {
//     console.log("Mouse Pressed...");
// })

// ====Mouse-up event=====
// box,addEventListener('mouseup', function() {
//     console.log("Mouse Released...");
// })

// ====Mouse-move event=====
// box,addEventListener('mousemove', function() {
//     console.log("Mouse Moved...");
// })

// ====Mouse-over event=====
// box.addEventListener('mouseover', function() {
//     console.log("Mouse Over...");
// })

// ====Mouse-out event=====
// box.addEventListener('mouseout', function() {
//     console.log("Mouse Out...");
// })


// ====================================== Keyboard Events ========================================

// ==== Key-down event ====

// let input = document.getElementById("input");
// input.addEventListener('keydown', function () {
//     console.log("Key Down...");
// })

// let input = document.getElementById("input");
// input.addEventListener('keydown', function (event) {
//     console.log(event.key);
// })

// let input = document.getElementById("input");
// input.addEventListener('keydown', function (event) {
//     if (event.key =='Enter') {
//         alert("Enter Pressed");
//     }
// })

// ==== Key-up event ====
// let input = document.getElementById("input");
// input.addEventListener('keyup', function () {
//     console.log("Key Up...");
// })

// Example
input.addEventListener('keydown', function (event) {
    // console.log(event.keyCode);
    let keyCode = event.keyCode;

    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
        return;
    }
    event.preventDefault();
})