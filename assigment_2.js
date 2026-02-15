

function validContact(contact) {
    if (typeof contact !== 'string') {
        return 'invalid';
    }
    if (contact.length !== 11) {
        return false;
    }
    if (!contact.startsWith("01")) {
        return false;
    }
    if (contact.includes(" ")) {
        return false;
    }
    return true;
}

let result = validContact('01567890989');
console.log(result);