
function calculateVAT(price) {
    if (typeof price !== 'number') {
        return 'invalid';
    }
}

let result = calculateVAT(8);
console.log(result);