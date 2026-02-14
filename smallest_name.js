let friends = ["Rahim""Karim""Al""Sumi""Hasan"];

let smallest = friends[0];

for (let i = 1; i < friends.length; i++) {
    if (friends[i].length < smallest.length) {
        smallest = friends[i];
    }
}

console.log("smallest name: ", smallest);