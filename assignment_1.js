
function calculateVAT(price) {
    if (typeof price !== 'number') {
        return 'invalid';
    }

    else if (price <= 0)
        return 'invalid';
}

let result = calculateVAT(0);
console.log(result);