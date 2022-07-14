const sumAll = function(num1, num2) {
    let diff = 0;
    let sum = 0;
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(num1 > 0 && num2 > 0){
            diff = Math.abs(num1 - num2);
            for(let i = 0; i <= diff; i++){
                sum = sum + i;
            }
            if(num1 > num2){
                sum += num1
            }else{
                sum += num2
            }
            return sum;
        }
        else{
            return 'ERROR';
        }
    }else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
