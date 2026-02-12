// let dihsa = 7;
// let selman = 6;

// if (dihsa > selman) {
//     console.log("you will get the stobery");
// }

// else {
//     console.log("good kepp lerning you will get in the feuture");
// }

// -------------------------------------------------------------------------------
// inside a function

// function getMax(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }



// let number = getMax(11, 77);
// console.log("this is the bigger number: ", number);

// -------------------------------------------------------------------------------------------

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}



let number = getMax(11, 77);
let number2 = getMax(66, 98);
let total = getMax(number, number2)
console.log("this is the bigger number: ", total);