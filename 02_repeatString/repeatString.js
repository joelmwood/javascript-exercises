const repeatString = function(string, num) {
    //test 01
    let tempString = "";
    if(num>=0){
        for (let x = 0; x < num; x++){
            tempString += string;
        }
    }else{
        tempString = "ERROR"
    }
    return tempString;
};

// Do not edit below this line
module.exports = repeatString;
