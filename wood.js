// chair-- > 3 cft
// tabel-- > 10 cft
// bed-- > 50 cft

function woodQuantity(chairQuantity, tabelQuantity, bedQuantity) {
    let perChairWood = 3;
    let perTabelWood = 10;
    let perBedWood = 50;

    let chairTotalWood = chairQuantity * perChairWood;
    let tabelTotalWood = tabelQuantity * perTabelWood;
    let bedTotalWood = bedQuantity * perBedWood;

    let totalWood = chairTotalWood + tabelTotalWood + bedTotalWood;

    return totalWood;
}

let wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);