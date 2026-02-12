

function countVowels(str) {
    let count = 0;

    let vowels = "aeuouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello aeuou"));
console.log(countVowels("masud "));