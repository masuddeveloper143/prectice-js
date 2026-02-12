function findLongestWorsd(str) {
    const words = str.split(" ");
    let longest = " ";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;

}

let centence = " i am lerning a programmig to beome a programming";

let result = findLongestWorsd(centence);
console.log(result);

