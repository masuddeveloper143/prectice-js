


// create a function that will return only even numbetrs return the sum of even number 

function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}




const result = [4, 4, 5, 7, 4, 3,]
const sum = evenNumbersOnly(result);
console.log('even numbers are:', sum);

