const repeatString = function(string, num) {
    let newString ='';
    if(num >= 0){
        do{
            if(num > 0){
                newString = newString + string;
                num = num - 1
            }
        }while(num > 0);
        return newString;
    }else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
