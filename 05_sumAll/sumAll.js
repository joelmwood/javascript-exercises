const sumAll = function(num1, num2) {
    // if num1 is larger than num2 swap values
    if(num1 > num2){
        [num1, num2] = [num2, num1];
    }

    //if num1 is less than zero return Error
    if(num1 < 0 ){
        return "ERROR";
    }

    //if either number isn't an integer return an Error
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    let sum = 0;
    for (let x = num1; x <= num2; x++){
        sum = sum + x;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
