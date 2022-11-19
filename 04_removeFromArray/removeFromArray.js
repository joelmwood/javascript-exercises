const removeFromArray = function(array, removeItem01, removeItem02, removeItem03, removeItem04) {
    const index01 = array.indexOf(removeItem01);
    if (index01 > -1){ //only splice array when item is found
        array.splice(index01, 1); // 2nd parameter means only remove one item
    }
    const index02 = array.indexOf(removeItem02);
    if (index02 > -1){ //only splice array when item is found
        array.splice(index02, 1); // 2nd parameter means only remove one item
    }
    const index03 = array.indexOf(removeItem03);
    if (index03 > -1){ //only splice array when item is found
        array.splice(index03, 1); // 2nd parameter means only remove one item
    }
    const index04 = array.indexOf(removeItem04);
    if (index04 > -1){ //only splice array when item is found
        array.splice(index04, 1); // 2nd parameter means only remove one item
    }
    
    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
