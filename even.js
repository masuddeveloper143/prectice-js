// let num = 1;

// while (num <= 10) {
//     console.log(num);
//     if (num % 2 === 0) {
//         console.log('even number', num);

//     }
//     num++;   //num++ while loop-এর শেষে রাখতে হবে, যেন সব ক্ষেত্রে চলে
// } 




// for (let i = 0; i < 20; i++){
//     if(i %2 ===0){
//         console.log(i);
//     }
// }
// for (let i = 1; i < 20; i+=2){
//     if(i %2 !==0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 40; i++) {
//     if (i % 5 === 0){
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 40; i++) {
//     if (i % 3 === 0 || i % 4 === 0){
//         console.log(i);
//     }
// }



// for (let i = 1; i <= 40; i++) {
//     if (i % 3 === 0 && i % 2 === 0){
//         console.log(i);
//     }
// }
let total = 0;
for (let i = 1; i <= 43; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        total = total + i;
        console.log("total: ", total);
}

}
console.log(total);


