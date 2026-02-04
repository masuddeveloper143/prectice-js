let i = 1;
while(i <= 100){
    if(Number.isInteger(Math.sqrt(i))){
        console.log("first square number found:", i);
        break;
    }
    i++;
}