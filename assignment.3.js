

function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "invalid";

    }

    let passCount = 0;
    let failCount = 0;

    for (let mark of marks) {
        if (mark >= 50) {
            passCount++;
        }
        else {
            failCount++;
        }
        return passCount > failCount;
    }
}

let arry = [66, 77, 40,];
let result = willSuccess(arry);
console.log(result);