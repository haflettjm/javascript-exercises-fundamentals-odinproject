const removeFromArray = function() {
    let array = arguments[0];
    for(let x = arguments.length; x > 0; x--){
        for(let i = 0; i < array.length; i++){
            if(array[i] === arguments[x]){
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
