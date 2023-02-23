const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
};

const power = function() {
  return Math.pow(a, b);
};

const factorial = function() {
  // if (n === 0) return 1;
  // let product = 1;
  // for (let i = n; i > 0; i--) {
  //   product *= i;
  // }
  // return product;

  if  (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= 1;
  }
  return product;
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
