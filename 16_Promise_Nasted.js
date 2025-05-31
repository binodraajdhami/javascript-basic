// Promise

// Add 3 Task and handle Resolve and Reject usint Promise

//

// 

// Go To Trip

// Buy Scooter
function buyScooter(money) {
    return new Promise(function (reslove, reject) {

        if (money == '' || money == undefined) {
            reject("Without Money, No Scooter!");
        }

        reslove("Honda Dio");
    });
}

// Ask For Money
function askForMoney(money) {
    return new Promise(function (reslove, reject) {

        let salary = 50000;

        if (salary < money) {
            reject("No Enough Money!")
        }

        reslove(money);

    });
}

let result = askForMoney(40000);

result
    .then(function (data) {
        console.log("Data : ", data);

        return buyScooter(data);
    })
    .then(function (data) {
        console.log("Result of buying scooter: ", data);

        // call task : Go To Trip
        // return 
    })
    .catch(function (error) {
        console.log("Error :", error);
    });