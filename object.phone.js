
// this is a normal object 

// let phones = [
//     { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
//     { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
//     { name: 'Iphone', price: 15000, camera: '12mp', color: 'black' },
//     { name: 'walton', price: 13000, camera: '12mp', color: 'black' },
//     { name: 'oppo', price: 30000, camera: '12mp', color: 'black' },
//     { name: 'HTC', price: 6000, camera: '12mp', color: 'black' },
// ];


// function getChaPestPhone(phone) {
//     console.log(phone);
// }

// let result = getChaPestPhone(phones);
// console.log(result);


// ---------------------------------------------------------------------------------------------------

// this is a loop object 

let phones = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 15000, camera: '12mp', color: 'black' },
    { name: 'walton', price: 10000, camera: '12mp', color: 'black' },
    { name: 'oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 60000, camera: '12mp', color: 'black' },
]




function getChaPestPhone(phones) {
    let min = phones[0];

    for (let phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

let result = getChaPestPhone(phones);
console.log(result);





