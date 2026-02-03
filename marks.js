let marks = 89.9;

let grad;


if (marks >= 90 && marks <= 100) {
    grad = "A";
} else if (marks >= 80 && marks <= 89.9) {
    grad = "B";
} else if (marks >= 70 && marks <= 79.9) {
    grad = "c";
} else if (marks >= 60 && marks <= 69.9) {
    grad = "D";
}
else {
    grad = "F";
}

console.log("Your result: ", grad);