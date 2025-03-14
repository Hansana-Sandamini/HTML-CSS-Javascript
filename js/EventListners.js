console.log("EventListners.js is loaded....");

const box = document.querySelector('.box');

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
box.addEventListener('mouseout', function() {
    console.log("Mouse Out...");
})