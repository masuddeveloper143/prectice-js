
function calculateSleepTime(times) {
    if (!Array.isArray) {
        return "invalid";
    }

    let totalSeconds = 0;

    for (let time of times) {
        if (typeof time !== 'number') {
            return "invalid";
        }

        totalSeconds += time;
    }

    let hour = Math.floor(totalSeconds / 3600);
    let remainingSecond = totalSeconds % 3600;

    let minute = Math.floor(totalSeconds / 60);
    let remainingSecond = totalSeconds % 60;

    return {
        hour: hour,
        minute: minute,
        second: second
    }
}



let result = calculateSleepTime(times);
console.log(result);


