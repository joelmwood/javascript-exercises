const palindromes = function (string) {
    let newString = "";
    let passedString = string.toLowerCase();
    passedString = passedString.replace(/[^a-zA-Z0-9 ]/g, '');
    passedString = passedString.replace(/\s/g, '');
    if(passedString.length === 1) return true;
    for(i=passedString.length-1; i >= 0; i--){
        newString += passedString[i];
    }
    if (newString == passedString) {
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
