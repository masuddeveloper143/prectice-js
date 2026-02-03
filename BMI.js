let weight = 70;
let heigth = 1.75;

let bim = weight / (heigth * heigth);

let category;

if (bim < 18.5) {
    category = "underweight";
} else if (bim >= 18.5 && bim <= 24.9) {
    category = "normal";
} else if (bim > 25 && bim <= 29.9) {
    category = "overweight";
}

else {
    category = "obese";
}

console.log("bim: ", bim.toFixed(2));
console.log("health category:", category);

