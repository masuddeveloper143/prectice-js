
// semple leapYear
// year will be leap year if the year is diviseble by 4

// those yeara that is not divisbile by 100, if the year dividible by 4

function leapYear(leap) {
    if (leap % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let result = leapYear(2043);
// console.log(result);

// -----------------------------------------------------------------------------------------------


function islearYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let result1 = islearYear2(2100);
let result2 = islearYear2(2400);
let result3 = islearYear2(1900);
let result4 = islearYear2(2052);
let result5 = islearYear2(2043);
console.log(result1, result2, result3, result4, result5);