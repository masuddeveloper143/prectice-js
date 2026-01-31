var age = 25;
var isStudent = true;
var ticketFare = 800;


if (age < 10) {
    ticketFare = 0;
} else if (isStudent === true) {
    ticketFare = 0.5;
} else if (age >= 60) {
    ticketFare = 0.85;
} else {
    ticketFare = 800;
}

console.log("ticketFare", ticketFare, "tk");