

function zero_count(binaryString) {
    let count = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    return count;
}

let result = zero_count("10101010101010101");
console.log(result);