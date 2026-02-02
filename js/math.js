// TODO: Implement the following functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  // TODO: return the difference of a and b
  console.log("subtract() called with", a, b);
}

function multiply(a, b) {
  // TODO: return the product of a and b
  console.log("multiply() called with", a, b);
}

function divide(a, b) {
  // TODO: handle division by zero (throw an Error with message "Cannot divide by zero")
  // TODO: return the result of a divided by b
  console.log("divide() called with", a, b);
}

module.exports = { add, subtract, multiply, divide };
