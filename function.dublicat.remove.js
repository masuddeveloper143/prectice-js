// Array has some  dublicat element fund this is the function 

// let dubuleName = ['masus', 'rubel', 'romjan', 'forhad', 'shohel', 'masus', 'rubel', 'romjan', 'forhad', 'shohel'];

// let number = [1, 22, 2, 33, 3, 55.1, 22, 2, 33, 3, 55]


// function noDublicat(arry){
//     console.log(arry);
// }

// let uniqueArry = noDublicat(dubuleName);
// console.log(uniqueArry);

// ------------------------------------------------------------------------------------------




let dubuleName = ['masus', 'rubel', 'romjan', 'forhad', 'shohel', 'masus', 'rubel', 'romjan', 'forhad', 'shohel'];

let number = [1, 22, 2, 33, 3, 55.1, 22, 2, 33, 3, 55]


function noDublicat(arry) {
    let unique = [];
    for (let item of arry) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

let uniqueArry = noDublicat(dubuleName);
console.log(uniqueArry);

// ------------------------------------------------------------------------------------------





// let dubuleName = ['masus', 'rubel', 'romjan', 'forhad', 'shohel', 'masus', 'rubel', 'romjan', 'forhad', 'shohel'];

// let number = [1, 22, 2, 33, 3, 55.1, 22, 2, 33, 3, 55]


// function noDublicat(arry){
//     console.log(arry);
// }

// let uniqueArry = noDublicat(dubuleName);
// console.log(uniqueArry);

// ------------------------------------------------------------------------------------------





// let dubuleName = ['masus', 'rubel', 'romjan', 'forhad', 'shohel', 'masus', 'rubel', 'romjan', 'forhad', 'shohel'];

// let number = [1, 22, 2, 33, 3, 55.1, 22, 2, 33, 3, 55]


// function noDublicat(arry){
//     console.log(arry);
// }

// let uniqueArry = noDublicat(dubuleName);
// console.log(uniqueArry);

// ------------------------------------------------------------------------------------------