

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumber = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumber.push(numbers[i]);
    }
}

console.log(evenNumber);