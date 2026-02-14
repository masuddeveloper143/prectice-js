function multiply(num1, num2) {
    let mult = num1 * num2;
    return mult;
}

let result = multiply(4, 4)
console.log(result);


// -----------------------------------------------------------------


function multiply(num1, num2) {

    if (typeof num1 !== 'number') {
        return 'please provide your number '
    }
    let mult = num1 * num2;
    return mult;
}

let result = multiply('5', 'seven')
console.log(result);


// -----------------------------------------------------------------------


function multiply(num1, num2) {
    let mult = num1 * num2;
    return mult;
}

let result = multiply(4, 4)
console.log(result);