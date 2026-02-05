
//Count how many times a string has the letter a

// let text = "banana";
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === 'a') {
//         count++;
//     }
// }

// console.log(count);


// let text = "AnAppleAndBanana";
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === 'a' || text[i] === 'A') {
//         count++;
//     }
// }

// console.log(count);


let = "Educstion";
text = text.toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowels = true;

for (let i = 0; i < vowels.length; i++) {
    if (!text.includes(vowels[i])) {
        hasAllVowels = false;
        break;
    }
}
console.log(hasAllVowels;)