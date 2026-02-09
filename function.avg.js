

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers, size) {
    let sum = 0;
    for (let i = 0; i < size; i++)
        sum = sum + numbers[i];
}