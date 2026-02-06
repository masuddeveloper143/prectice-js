// const person = ['masud', 'romjan', 'rubel', 'naiyeem', 'forhad'];

// const sortedPerson = person.sort();
// console.log(sortedPerson);

// // sort 

// const numbers = [3, 8, 9, 2, 6, 5,];

// // ascending smaller to larger  ---> [2, 3, 6, 8, 9,] 


// // dscending smaller to larger  ---> [9, 8, 6, 3, 2,] 

// const numbers_asc = numbers.sort();
// console.log(numbers_asc);


// ---------------------------------------------------------------------------------

const person = ['masud', 'romjan', 'rubel', 'naiyeem', 'forhad'];

const sortedPerson = person.sort();
console.log(sortedPerson);

// sort 

const numbers = [4, 7, 9, 12, 8, 43, 6, 1];

// ascending smaller to larger  ---> [2, 3, 6, 8, 9,] 


// dscending smaller to larger  ---> [9, 8, 6, 3, 2,] 

// const numbers_asc = numbers.sort(); //not working 
const numbers_asc = [...numbers].sort(function (a, b) { return a - b })
const numbers_dcs = [...numbers].sort(function (a, b) { return a - b })

console.log(numbers_asc);
console.log(numbers_dcs);

