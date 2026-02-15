
function calculateVAT(price) {
    if (typeof price !== 'number') {
        return 'invalid';
    }

    else if (price <= 0) {
        return 'invalid';
    }

    let vat = price * 0.075;
    return vat;

}

let result = calculateVAT(1);
console.log(result);