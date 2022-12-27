const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(passedArray) {
	let sum = 0;
  if (passedArray.length === 0) return 0;
  for (let i=0; i < passedArray.length; i++){
    sum += passedArray[i];
  }
  return sum; 
};

const multiply = function(passedArray) {
  if (passedArray.length === 0) return 0;
	let multiplied = passedArray[0];
  for (let i=1; i < passedArray.length; i++){
    multiplied *= passedArray[i];
  }
  return multiplied; 
};

const power = function(a, b) {
  return a ** b; 
};

const factorial = function(a) {
  if(a < 0) return;
  if(a === 0) return 1;
  if(a === 1) return 1;
  if(a === 2) return 2;

  let fact=1;
  for(let i = 1; i < a + 1; i++){
      fact *= i;
  }
  return fact;
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
