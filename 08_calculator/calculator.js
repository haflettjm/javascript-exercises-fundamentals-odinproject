const add = function(x,y) {
  let res = x + y
  return res
};

const subtract = function(x,y) {
  let res = x - y
  return res
};

const sum = function(arr) {
  // computes the sum of an array
  let res = 0;
  if(arr.length != 0){
    for(let i = 0; i < arr.length; i++){
      res += arr[i]
    } 
  }
  return res
};

const multiply = function() {
  let res = x * y
  return res
};

const power = function() {
	  let res = Math.pow(x,y)
  return res
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
