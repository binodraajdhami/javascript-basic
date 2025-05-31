// Promise
// It Is a function which handle asynchron..... result!
// reject, resovel

// Promise maintain state: 
// Pending
// Fulfilled
// Rejected

// Methods to haldle Resulst
// then
// catch
// finally

function askNote(note) {

    return new Promise(function (resolve, reject) {
        if (note != "JS") {
            return reject("Note Not Matched!");
        }
        return resolve("Note is Matched : " + note);
    });
}

let result = askNote("JS");
result
    .then(function (data) {
        console.log("Data: ", data)
    })
    .catch(function (err) {
        console.log("Error: ", err)
    })
// .finally(function () {
//     console.log("Finnaly!")
// });



function askMoney() {
    return new Promise(function (resolve, reject) {
        let status = false

        if (!status) {
            return reject("Error");
        }

        return resolve("Data");
    })
}

let result2 = askMoney();
result2
    .then(function (data) {
        console.log("data is: ", data);

        // call another task
    })
    .catch(function (err) {
        console.log("Error is: ", err);
    });