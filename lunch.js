let myScore = 84;
let frindScore = 81;

if (myScore > 80) {

    if (frindScore > 80) {
        console.log("go to for a lunch");
    } else if (frindScore > 60 && frindScore < 79.9) {
        console.log("good luck next time");
    } else if (frindScore > 40 && frindScore < 59.9) {
        console.log("keep your frind messege unseen");
    }
    else {
        console.log("block your frind");
    }
}

else {
    console.log("go to the home then sleep");
}