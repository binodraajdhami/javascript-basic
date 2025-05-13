// If, else if, else and switch

let isRaining = false;

if (isRaining) {
    console.log("Carry Umbrella");
} else {
    console.log("Dot not carry umbrella");
}

let age = 61;

if (age >= 18) {
    console.log("Eligible Vote");
} else {
    console.log("Not Eligible Vot");
}


// && : and
// ! : Not
// || : or

// NaN

// Check Eligible for Loan > 18 < 60
if (age >= 18 && age < 60) {
    console.log("Eligible for Loan");
} else {
    console.log("not Eligible for Loan");
}

// Caculat Result of Student (Division)
let marks = 45;

if (marks >= 80) {
    console.log("Distinction");
} else if (marks >= 60 && marks < 80) {
    console.log("First");
} else if (marks >= 45 && marks < 60) {
    console.log("Second");
} else if (marks >= 32 && marks < 45) {
    console.log("Third");
} else {
    console.log("------");
}

let day = "Tuesday";

switch (day) {
    case "Sunday":
        console.log("Today is Sunday");
        break;

    case "Monday":
        console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday");
        break;

    case "Friday":
        console.log("Today is Friday");
        break;

    case "Saturday":
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid Day");
        break;
}

