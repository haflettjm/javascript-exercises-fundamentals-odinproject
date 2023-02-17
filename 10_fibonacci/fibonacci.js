const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let next;
    num = parseInt(num)
    if(num < 0){
        return "OOPS"
    }
    for(let i = 1; i < num; i++){
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    return n2
};

// Do not edit below this line
module.exports = fibonacci;
