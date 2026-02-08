

// ovjective : write a function give me the sum of numbers in an array 
// step1: diclear a function 
// step 2 : call chack whether the funcrion is called porperly 
// step 3 : set a perametar(s)
// step 4 : pass the perametar (s) chack the whether parametar passed in a proper formet



// function sumOfNumber(numbers) {
//     console.log(numbers)
// }

// const numbs = [23, 44, 5, 4,]
// const sum = sumOfNumber(numbs);
// console.log('sum of number is');


// -----------------------------------------------------------------------------------------

// step 5: do the function task step by step


function sumOfNumber(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [23, 44, 5, 4,]
const sum = sumOfNumber(numbs);
console.log('sum of number is', sum);