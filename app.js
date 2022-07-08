//Adding a semicolon before the IIFE
const greeting = "Hello world"

    ; (function myGreeting() {
        console.log(greeting);
    })()

//Using IIFEs with Closures

let friendlyFunction = (function () {
    let greetCount = 0;
    return function () {
        console.log(`Hello ${greetCount}x`);
        return greetCount++;
    }
})();

friendlyFunction();
friendlyFunction();
friendlyFunction();
