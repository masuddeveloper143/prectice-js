// 12 inch 1feet only number found normaly

// function inchToFeet(inch) {
//     let feet = inch / 12;
//     return feet;
// }

// let ShovoAge = inchToFeet((75));
// console.log(ShovoAge);

// ------------------------------------------------------------

// this is the string part like a (6feet 3inch) 

function inchToFeet2(inch) {
    let feetFaction = inch / 12;
    let feetNumber = parseInt(feetFaction);
    let inchRemaining = inch % 12;
    let result = feetNumber + ' ft ' + inchRemaining + ' inch '
    return result;
}

let ShovoAge = inchToFeet2(75);
console.log(ShovoAge);

