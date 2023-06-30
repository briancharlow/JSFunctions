// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.


function callback(delayedFunction) {
    setTimeout(delayedFunction, 5000);
}

function delayedFunction() {
    console.log("After callback");
}


console.log("Before callback");
callback(delayedFunction);

