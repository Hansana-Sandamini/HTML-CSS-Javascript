let num = 0;

const intervalId = setInterval(function() {
    if (num < 10) {
        num += 1;
        console.log("Number : " + num);
    }
}, 500);

setTimeout( () => {
    clearInterval(intervalId);
}, 5100)