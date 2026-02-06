let sentence = "I am learning javascript";

let words = sentence.split("");

let reversedWord = [];

for (i = words.length - 1; i >= 0; i--) {
    reversedWord.push(words[i]);
}

let result = reversedWord.join(" ");
console.log(result);
