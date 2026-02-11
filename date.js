let today = new Date();
let date = new Date('2062-10-19')
console.log(date.getMonth());
console.log(date.getDay());
let specificDate = new Date(1991, 0, 26)
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString("en-GB"));

// unix epoc