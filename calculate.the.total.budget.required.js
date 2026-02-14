function calculatethetotal budget required(laptopQty, tabletQty, mobileQty){

    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;


    let total =
        (laptopQty * laptopPrice) +
        (tabletQty * tabletPrice) +
        (mobileQty * mobilePrice);


    return total;
}

let budget = calculatethetotal(44, 66, 66,)
console.assert.log(budget);


