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
countNumber(result);
console.log(result);