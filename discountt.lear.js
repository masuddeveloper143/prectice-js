

// first -->100
// 101dto200: --> 90
// above200: --> 70

function layered100discountedTotal(quantity) {
    let first100Price = 100;
    let second100Price = 90;
    let above100Price = 70;

    if (quantity <= 100) {
        let total = quantity * first100Price;
        return total;
    }

    else if (quantity <= 200) {

        let first100total = 100 * first100Price;
        let remainingQuantity = quantity - 100;
        let remainingTotal = remainingQuantity * second100Price;
        let total = first100total + remainingTotal;
        return total;
    }

    else {
        let first100Total = 100 * first100Price;
        let second100Total = 100 * second100Price;
        let remainingQuantity = quantity - 200;
        let remainingTotal = remainingQuantity * above100Price;
        let total = first100Total + second100Total + remainingTotal;
        return total;
    }

}


let result = layered100discountedTotal(101);
console.log(result);