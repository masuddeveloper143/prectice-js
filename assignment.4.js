

function validProposal(person1, person2) {

    if (typeof person1 !== "object" ||
        typeof person2 !== "object" ||
        person1 === null ||
        person2 === null) {
        return "invalid";

    }

    if (person1.gender === person2.gender) {
        return false;
    }

    let ageDifference = Math.abs(person1.age - person2.age);
    if (ageDifference > 7) {
        return false;
    }
    return true;
}

let person1 = (
    { name: 'ruhul', gender: 'male', age: 88 }
)
let person2 = (
    { name: 'karima', gender: 'female', age: 21 }
)


let result = validProposal(person1, person2);
console.log(result);


