function findLongestWorsd(str) {
    let words = str.split(" ");
    let logest = " ";

    for (let word of words) {
        if (word.length > logest.length) {
            logest = word;
        }
    }
    return logest;

}

let result = [" i am lerning a programmig to beome a programming"];

findLongestWorsd(result);
console.log(result);
