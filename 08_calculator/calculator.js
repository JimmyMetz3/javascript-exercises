const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let result = 0;
  array.forEach((item) => {
    result += item;
  })
  return result;
};

const multiply = function (array) {
  let result = 0;
  array.forEach((item) => {
    result *= item;
  })
  return result;
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
