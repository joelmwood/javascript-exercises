const fibonacci = function(num) {
    let answer = 0;
    let tempNum = parseInt(num);   
    
    if (tempNum === 0) return 0;
    if (tempNum === 1) return 1;
    if (tempNum === 2) return 1;
    if(tempNum < 0) return "OOPS";
    
    let newArray = [0, 1, 1];

    for(let i = 3; i < tempNum + 1; i++){
        newArray.push(newArray[i-1] + newArray[i-2]);
        // console.log(newArray);
    };
    answer = newArray[newArray.length-1];
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
