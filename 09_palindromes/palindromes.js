const palindromes = function (string) {
    let bool = true;
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.replace(/\s+/g, '');
    string = string.toLowerCase();
    console.log(string);
    let arr1 = Array.from(string);
    let arr2 = [...arr1].reverse()

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            bool = false;
        }
    }
    
    return bool
};

// Do not edit below this line
module.exports = palindromes;
