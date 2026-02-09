


// create a function that will return only even numbetrs return the sum of even number 

// function evenNumbersOnly(numbers) {
//     const evens = [];
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             console.log(number);
//             evens.push(number);
//         }
//     }
//     return evens;
// }

// const result = [4, 6, 5, 7, 10, 3,]
// const sum = evenNumbersOnly(result);
// console.log('even numbers are:', sum);

// --------------------------------------------------------------------------------------------

function sumOfevenNumber(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {

            console.log(number)
            sum = sum + number;
        }

    }

    return sum;

}

const numbs = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = sumOfevenNumber(numbs);
console.log('thes are even final number', sum);

// -------------------------------------------------------------------------------------------------------------------








