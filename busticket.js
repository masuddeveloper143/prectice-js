let age = 88;
let isStudent = false;
let tickePrice = 1000;

if (age < 10) {
    tickePrice = 0;
} else if (age > 60 && isStudent === true) {
    tickePrice = 0.50;
}
else {
    tickePrice = 1000;
}

console.log("ticket price: ", tickePrice, "tk")


