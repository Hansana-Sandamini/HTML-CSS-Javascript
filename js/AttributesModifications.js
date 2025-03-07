console.log("AttributesModifications.js is loaded...");

// 1. getAttribute() - Gets the value of an attribute on the specific 
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.facebook.com');
console.log(link.getAttribute('href'));

link.setAttribute('target', 'blank');

link.removeAttribute('target');
