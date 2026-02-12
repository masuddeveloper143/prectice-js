// chair-- > 3 cft
// tabel-- > 10 cft
// bed-- > 50 cft

// function woodQuantity(chairQuantity, tabelQuantity, bedQuantity) {
//     let perChairWood = 3;
//     let perTabelWood = 10;
//     let perBedWood = 50;

//     let chairTotalWood = chairQuantity * perChairWood;
//     let tabelTotalWood = tabelQuantity * perTabelWood;
//     let bedTotalWood = bedQuantity * perBedWood;

//     let totalWood = chairTotalWood + tabelTotalWood + bedTotalWood;

//     return totalWood;
// }

// let wood = woodQuantity(0, 10, 0);
// console.log('wood needed', wood);



// ---------------------------------------------------------------------------------------


function woodQuantity2(shortPent, underPent, fullPent) {
    let perPriceShortPent = 150;
    let perPriceUnderPent = 50;
    let perPriceFullPent = 400;

    totalshortPentPrice = shortPent * perPriceShortPent;
    totalunderPentPrice = underPent * perPriceUnderPent;
    totalfullPentPentPrice = fullPent * perPriceFullPent;

    totalWood = totalshortPentPrice + totalunderPentPrice + totalfullPentPentPrice;

    return totalWood;
}

let wood = woodQuantity2(3, 0, 0,);
console.log('wood neded', wood);





