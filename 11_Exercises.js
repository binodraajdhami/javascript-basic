let mobiles = [
    {
        brand: "Apple",
        model: "iPhone 15",
        color: "Black",
        price: 25000
    },
    {
        brand: "Samsung",
        model: "Galaxy M25",
        color: "Silver",
        price: 15000
    },
    {
        brand: "Samsung",
        model: "Galaxy M25",
        color: "Black",
        price: 15000
    },
    {
        brand: "OPPO",
        model: "F9",
        color: "Red",
        price: 15000
    },
    {
        brand: "OPPO",
        model: "F99",
        color: "Black",
        price: 15000
    },
    {
        brand: "OPPO",
        model: "FFF9",
        color: "Red",
        price: 15000
    },
];

console.log("Original Array: ", mobiles);

mobiles.forEach(function (item, index) {
    if (item.color == "Black") {
        item.color = "Orange";
        item.screen = "LCD"
    }
});

console.log("Chage black to Orange: ", mobiles);

// filtee method returns new array
// Display Mobile which has black color
let orangeColorMobile = mobiles.filter(function (item, index) {
    if (item.color == "Orange") {
        return item;
    }
});

console.log("Orange color mobiles: ", orangeColorMobile);
// Kunai array bata filter garera items nikalnu paryo vane filter()


// Map
// map method returns new array
// map methos have accse to add new element
mobiles.map(function (item, index) {
    if (item.color == "Orange") {
        item.isSold = true;
        return item;
    }
});

console.log("Last mobiles: ", mobiles);


// Task
mobiles.find(function (item, index) {

});

// Task
mobiles.reduce(function (item, index) {

});