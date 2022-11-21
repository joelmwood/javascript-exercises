const removeFromArray = function (...args){
    //pull out the first argument, the array, and set it to a new array
    const array = args[0];
    //create new empty array
    const newArray = [];
    //use forEach to loop through the argument array
    array.forEach((item)=> {
        //push all elements to the array UNLESS it is an included additional arguement
        if(!args.includes(item)){
            newArray.push(item);
        }
    });    
    
    return newArray;
};

//**************************************************************************************************
//***************   This code is very limiting in that you would have to continually    ************
//***************   add arguements for every additional item to be removed. This is     ************
//***************   not maintainable in this form.                                      ************
//**************************************************************************************************
// const removeFromArray = function(array, removeItem01, removeItem02, removeItem03, removeItem04) {
//    const index01 = array.indexOf(removeItem01);
//     if (index01 > -1){ //only splice array when item is found
//         array.splice(index01, 1); // 2nd parameter means only remove one item
//     }
//     const index02 = array.indexOf(removeItem02);
//     if (index02 > -1){ //only splice array when item is found
//         array.splice(index02, 1); // 2nd parameter means only remove one item
//     }
//     const index03 = array.indexOf(removeItem03);
//     if (index03 > -1){ //only splice array when item is found
//         array.splice(index03, 1); // 2nd parameter means only remove one item
//     }
//     const index04 = array.indexOf(removeItem04);
//     if (index04 > -1){ //only splice array when item is found
//         array.splice(index04, 1); // 2nd parameter means only remove one item
//     }
    

// Do not edit below this line
module.exports = removeFromArray;
