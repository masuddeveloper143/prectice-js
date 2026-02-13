let product1 = [
    { name: 'ti srat', price: 300, quantity: 1, },
    { name: 'under pent', price: 100, quantity: 0 },
    { name: 'srat', price: 700, quantity: 0 },
    { name: 'pent', price: 1200, quantity: 0 },
]


function getShop(products) {
    let total = 0;

    for (let product of products) {
        let thisProdact = product.price * product.quantity;
        total = total + thisProdact;
    }

    return total;
}

let result = getShop(product1);
console.log(result);