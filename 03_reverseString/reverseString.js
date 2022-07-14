const reverseString = function(input) {
    let newString = ''
    if(input != ''){        
        for(let i = input.length; i > 0; i--){
            newString += input[i-1];
        }
        return newString;
    }else{
        return input;
    }
};

// Do not edit below this line
module.exports = reverseString;
