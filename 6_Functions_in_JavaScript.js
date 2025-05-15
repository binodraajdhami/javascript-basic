// Function
// Reuseable block of code which perform specific task.

// example
// function subTwoNumber() {
//     let num1 = 20;
//     let num2 = 30;
//     let result = num1 + num2;

//     console.log(result);
// }
// subTwoNumber();

// Type Functions
// 1. Naming Function
// 2. Anonymous

// Naming Function
// Return Retun Type
// Function with Argument
// Function with Argument Retun Type


// Function with Argument
function sayHello(name) {
    console.log("Hello ", name)
}
sayHello("Shyam");
sayHello("Ram");
sayHello("Hair");

// Return Retun Type
function subTwoNumber(a, b) {
    let sum = 5 + b;
    return sum;
}
let result = subTwoNumber(5, 6);


console.log("Check : ", subTwoNumber);


// Anonymous
// IIFE
// Immidetly Invoke Functional Expression
(function () {
    console.log('I am Anonymous Function')
})();

(function (n1, n2) {
    console.log(n1 + n2);
})(5, 6);
