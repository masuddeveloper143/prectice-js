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

    else if(typeof second !== 'string'){
        return 'second Name should be a string'
    }
    let full = first + ' ' + second;
    return full;
}

let result = fulleName(4, 7)
console.log(result)