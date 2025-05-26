// Task
function buyScooter(money, callbackFn) {
    console.log("I arrive at showroom");
    console.log("I bought scooter");

    callbackFn("Honda Dio 125 CC");
}

// Task
function askMoneyToMother(money, callbackFn) {
    console.log("I dont have money right now");
    console.log("Momy Said: Salary aayepaxi dinxu");

    setTimeout(function () {
        callbackFn(money);
    }, 5000);
}

console.log("Ask money");
askMoneyToMother(50000, function (money) {

    console.log("Momy gave money");
    console.log("I am going to showroom");

    buyScooter(money, function (scooter) {
        console.log("Finally I bought :", scooter)
    })

});

console.log("I clean my room");
console.log("I go to colege");

// Node.JS