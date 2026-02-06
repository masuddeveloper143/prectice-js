// const number = ['1', '2', '3', '4',];

// console.log(number);

// console.log(number.reverse())

//---------------------------------------------------------------------------------

// const number = ['1', '2', '3', '4',];

// console.log(number.reverse())


//------------------------------------------------------

// const number = ['1', '2', '3', '4',];

// const reversed = number.reverse();

// console.log(reversed);

//----------------------------------------------------

// const number = ['1', '2', '3', '4',];

// const rev_numbers = [];

// for (const num of number) {
//     // console.log(num);
//     // rev_numbers.push(num);
//     rev_numbers.unshift(num);
// }

// console.log(rev_numbers);

//------------------------------------------------------------------

const number = ['1', '2', '3', '4',];
const reversed = [];

for (let i = 0; i < number.length; i++) {
    console.log(i);
    const num = number[i];
    reversed.unshift(num);
    console.log(num);

}
console.log(number);
