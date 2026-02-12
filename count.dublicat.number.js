function countNumber(numbers, find) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) {
            count++;
        }
    }

    return count;
}

let result = [1, 5, 9, 5, 9, 6, 8, 8, 8, 9, 1];
console.log(countNumber(result, 5));
console.log(countNumber(result, 8));

// ---------------------------------------------------------------------------------------------------------


🔥 Advanced way (short version)
var numbers = [5, 6, 11, 12, 98, 5];

var result = numbers.filter(num => num === 5).length;

console.log(result);