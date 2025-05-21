let fullName = "ram thapa";

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// console.log(fullName.toString());


let student = {
    name: "Sita",
    email: "sita@gmail.com",
    sayHello: function () {
        console.log("Hello From Student");
    }
}

// student.sayHello();

// Array
// Index
let studentNames = ["Ram", "Bikal", "Jasmin", "Shandya", 'Krisna', "Shyam", "Hari"];

// console.log(studentNames.length);
// console.log(studentNames[0]);
// console.log(studentNames[1]);
// console.log(studentNames.indexOf('Bikal'));
// console.log(studentNames.indexOf('Hari'));
// console.log(studentNames.lastIndexOf('Hari'));
// console.log(studentNames.includes("Sita"));

console.log("Orginal Array: ", studentNames);

// Adding Element in First
studentNames.unshift("Geeta");
console.log("Adding in First: ", studentNames);

// Adding Element in In Last
studentNames.push("Sita");
console.log("Adding in Last: ", studentNames);

// Remove first element from array
studentNames.shift();
console.log("Remove first Elemeent: ", studentNames);

// Remove from Last Element from array
studentNames.pop();
console.log("Remove Last Elemeent: ", studentNames);

// Adding element middle of the array
studentNames.splice(2, 0, "Binod", "Anugra", "Bisal");
console.log("Remove middle element", studentNames);













