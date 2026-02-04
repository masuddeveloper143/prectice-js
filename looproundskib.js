let num = 1;

while (num <= 40) {
    if (num % 2 !== 0) {
        num++;
        continue;
    }
    console.log(num);
    num++;
}