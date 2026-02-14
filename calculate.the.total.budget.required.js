function calculatethetotalbudgetrequired(laptopQty, tabletQty, mobileQty) {

    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;


    let total =
        (laptopQty * laptopPrice) +
        (tabletQty * tabletPrice) +
        (mobileQty * mobilePrice);


    return total;
}

let budget = calculatethetotalbudgetrequired(2, 1, 3);
console.log(budget);

// ----------------------------------------------------------------------

// 🔥 Pro Version (Shorter)

function calculateElectronicsBudget(l, t, m) {
    return (l * 35000) + (t * 15000) + (m * 20000);
}


