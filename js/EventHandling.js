console.log("EventHandling.js is loaded....");

const saveBtn = document.getElementById("btnSave");

saveBtn.addEventListener("click", function() {
    // console.log("Button is Clicked....");
    alert("Button is Clicked....");

});

//============================================

saveBtn.addEventListener("click", handleClick);

function handleClick() {
    console.log("Button is Clicked....");
}

saveBtn.removeEventListener("click" , handleClick);