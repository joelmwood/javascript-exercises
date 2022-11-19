const repeatString = function(string, num) {
    //test 01
    let tempString = "";
    for (let x = 0; x < num; x++){
        tempString += string;
    }
    return tempString;
};

// Do not edit below this line
module.exports = repeatString;
