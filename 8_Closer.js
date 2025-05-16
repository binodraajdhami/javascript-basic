// Function inside function is called closer function
// let message = "Kathmandu";

function welcome(location) {
    console.log("Welcome to : ", location);

    function greeting(message) {
        console.log("I am arrived at:", message)
        // console.log("I am closer function of Welcome Functiion");

        function sayHello(name) {
            console.log("Hello : ", name)
            // console.log("I am closer function of Greeting Function");
        }

        return sayHello;
    }

    return greeting;
}

welcome("Kathmandu")("Tinkune")("Ram");

// let result = welcome();
// let res1 = result();
// res1();



// function sumTwoNumber(name) {

//     function sayHello() {
//         console.log("Hello : ", name);
//     }

//     return sayHello;
// }

// let result = sumTwoNumber("Ram");
// result();



























