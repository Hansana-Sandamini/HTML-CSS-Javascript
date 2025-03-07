console.log("ElementsHandling.js is loaded...");

const newDiv = document.createElement("div");
console.log(newDiv);

newDiv.id = "alert-success";
newDiv.className = "alert alert-success";
newDiv.textContent = "Successfully Created!";
console.log(newDiv);

newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.borderRadius = "12px";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";
console.log(newDiv);

const card = document.querySelector(".card");
card.append(newDiv);

// card.remove();    //remove an element

//==========================================
const errorDiv = document.createElement("div");
console.log(errorDiv);

errorDiv.id = "alert-error";
errorDiv.className = "alert alert-error";
errorDiv.textContent = "System Error !";

errorDiv.style.backgroundColor = "red";
errorDiv.style.color = "white";
errorDiv.style.borderRadius = "15px";
errorDiv.style.padding = "12px";
errorDiv.style.marginTop = "12px";

const card1 = document.querySelector(".card");
card1.append(errorDiv);

// clone the element
const clonedDiv = errorDiv.cloneNode(true);
card.append(clonedDiv);

console.log(card.hasChildNodes());