

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


// --------------------------------------------------------------------------------


// 🔥 আরেকটা clean version(lowercase করে)


function countVowels(str) {
    var count = 0;
    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i])) {
            count++;
        }
    }

    return count;
}