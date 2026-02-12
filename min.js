
// this is the find min numbers 


// let price = [20000, 16000, 50000, 12000, 35000];

// function getMin(numbers) {

//     let min = numbers[0];

//     for (let num of numbers) {
//         if (num < min) {
//             min = num;
//         }

//     }
//     return min;
// }

// let result = getMin(price);
// console.log('cheapest one is: ', result);



// -------------------------------------------------------------------------
// this is the function find max numbers 

let price = [20000, 16000, 50000, 12000, 35000];

function getMin(numbers) {

    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }

    }
    return max;
}

let result = getMin(price);
console.log('high one is: ', result);