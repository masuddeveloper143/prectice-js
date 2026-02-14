// function multiply(num1, num2) {
//     let mult = num1 * num2;
//     return mult;
// }

// let result = multiply(4, 4)
// console.log(result);


// -----------------------------------------------------------------


function multiply(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide your number'
    }
    let mult = num1 * num2;
    return mult;
}

// let result = multiply('5', 'seven')
// console.log(result);


// -----------------------------------------------------------------------


function fulleName(first, second) {
    if (typeof first !== 'string') {
        return 'first name should be a string'
    }

    else if (typeof second !== 'string') {
        return 'second Name should be a string'
    }
    let full = first + ' ' + second;
    return full;
}

let result = fulleName('ikmal', 'masdud')
// console.log(result)



// -------------------------------------------------------------------------------------

function getprice(product) {
    // console.log(typeof product)
    if (typeof product !== 'object') {
        return 'please provide an object'
    }
    let price = product.price;
    return price;

}

// let price = getprice({ name: `denver`, price: 244, color: `black` });
let price = getprice(5);
// console.log(price);


// ------------------------------------------------------------------------------

function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'please provide an array';
    }
    let second = numbers[1];

    return second;
}

// let second = getSecond(33, 55, 66);
let second = getSecond([33, 55, 66]);
console.log(second);