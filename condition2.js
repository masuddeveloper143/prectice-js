var weight = 70;
var height = 1.75;

var bmi = weight / (height * height);

bmi = bmi.toFixed(2);


var category;

if (bmi < 18.5) {

    category = "underweight";

} else if (bmi >= 18.5 && bmi <= 24.9) {

    category = "Normal";
} else if (bmi >= 25 && bmi <= 29.9) {

    category = "overheight";
} else {
    category = "obse";
}

console.log("Your BMI is: " + bmi);
console.log("Health Category: " + category);


