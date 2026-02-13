function add(num1, num2) {
    return num1 + num2;
}

// let result = add(56, 55);
// console.log(result);

// ----------------------------------------------------------- 

function subtract(num1, num2) {
    return num1 - num2;
}

// let result = add(56, 55);
// console.log(result);

// -----------------------------------------------------------------------

function multiply(num1, num2) {
    return num1 * num2;
}

// let result = add(56, 55);
// console.log(result);

// ---------------------------------------------------------------------------------



function divide(num1, num2) {
    return num1 / num2;
}

// let result = add(56, 55);
// console.log(result);

// ---------------------------------------------------------------------------------

function calculator(a, b, operation) {
    if (operation === 'add') {
        let result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        let result = subtract(a, b);
        return result;
    }

    else if (operation === 'multiply') {
        let result = multiply(a, b);
        return result;
    }

    else if (operation === 'divider') {
        let result = divide(a, b);
        return result;
    }
    else {
        return " only 'add', 'subtract','multiply','divider', operation is allowed. "
    }
}

let result = calculator(4, 5, 'subtract');
console.log(result);