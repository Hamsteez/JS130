const { numbers } = require("./addNumber");

function square(value) {
  return value * value;
}

function getNumbers() {
  return [...numbers];
}

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}

module.exports = sumOfSquares;