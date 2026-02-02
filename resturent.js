const age = 40;
const price = 500;

if (age <= 12) {
    console.log("you can eat for free");
}
else if (age >= 60) {
    // 50% discount

    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 50) {
    // 25% discouont
    const discount = price * 25 / 100;
    const payAmount = price - discount
    console.log(payAmount)
}
else if (price >= 40) {
    // 10% discount 
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price)
}

