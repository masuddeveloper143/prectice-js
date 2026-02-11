// function takes an Array as perametar the array

// function oddAverage(numbers) {
//     console.log(numbers);

// }

// let numbers = [12, 13, 14, 15];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);

//[-----------------------------------------------------------------------------------------------]
// this is function loop 👇

// function oddAverage(numbers) {
//     for (let number of numbers) {
//         console.log(number);
//     }

// }

// let numbers = [12, 13, 14, 15];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);

// // ----------------------------------------------------------------------------------------

// this is function fund odd numbers 👇

// function oddAverage(numbers) {
//     for (let number of numbers) {
//         if (number % 2 === 1) {
//             console.log(number);
//         }

//     }


// }

// let numbers = [12, 13, 14, 15, 48, 54, 75, 55];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);



// ------------------------------------------------------------------------------

// this is the function fund even numbers👇

// function oddAverage(numbers) {
//     for (let number of numbers) {
//         if (number % 2 === 0) {
//             console.log(number)
//         }
//     }
// }




// let numbers = [12, 13, 14, 15, 48, 54, 75, 55];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);


// ----------------------------------------------------------------------------------


// thi is a function odds number fund for loop odds containers👇

// function oddAverage(numbers) {
// // odds is the array thhat contains only the odd numbers 
//     let odds = []


//     for (let number of numbers) {

//         if (number % 2 === 0) {
//             // console.log(number);
//             odds.push(number);
//         }
//     }
//     console.log(odds);
//     return odds;
// }

// let numbers = [12, 13, 14, 15, 48, 54, 75, 55];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);

// -----------------------------------------------------------------------------------------------------------------------------

// this is a function fund even numbers and even numbers total how many numbers countintg and length fund 👇

// function oddAverage(numbers) {

//     let odds = []


//     for (let number of numbers) {

//         if (number % 2 === 0) {
//             console.log(number);
//             odds.push(number);
//         }


//     }

//     let sum = 0;
//     for (number of odds) {
//         sum = sum + number;
//     }

//     console.log(sum);

// }

// let numbers = [12, 13, 14, 15, 48, 54, 75, 55];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);

// -----------------------------------------------------------------------------------------------------------------------------




// -----------------------------------------------------------------------------------------------------------------------------

// this is a function fund even numbers and odd numbers total how many numbers countintg and length fund 👇

function oddAverage(numbers) {

    let odds = []


    for (let number of numbers) {

        if (number % 2 === 1) {
            console.log(number);
            odds.push(number);
        }


    }

    let sum = 0;
    for (number of odds) {
        sum = sum + number;
    }
    let count = odds.length;
    console.log(sum, count);
    let avg = sum / count;
    console.log(avg);


}


let numbers = [12, 13, 14, 15, 48, 54, 75, 55];
let avg = oddAverage(numbers);
console.log('avaerage of the odd number is: ', avg);

// -----------------------------------------------------------------------------------------------------------------------------
// function oddAverage(numbers) {
// // odds is the array thhat contains only the odd numbers
//     let odds = []


//     for (let number of numbers) {

//         if (number % 2 === 0) {
//             // console.log(number);
//             odds.push(number);
//         }
//     }
//     console.log(odds);
//     return odds;
// }

// let numbers = [12, 13, 14, 15, 48, 54, 75, 55];
// let avg = oddAverage(numbers);
// console.log('avaerage of the odd number is: ', avg);

// // -----------------------------------------------------------------------------------------------------------------------------


