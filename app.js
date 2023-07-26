// 1. Create basic calculator functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// 2. Create operation variables

let num1;
let num2;
let operator;

// 3. Create function to operate on two numbers

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);

    case '-':
      return subtract(num1, num2);

    case '*':
      return multiply(num1, num2);

    case '/':
      return divide(num1, num2);
  }
}
