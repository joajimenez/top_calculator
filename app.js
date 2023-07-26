import { ui } from './ui.js';

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

function srqRoot(num) {
  return Math.sqrt(num);
}

function perCent(num) {
  return num / 100;
}

// 2. Create operation variables

let num1 = '';
let num2 = '';
let operator;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/', '√', '%'];

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

    case '√':
      return srqRoot(num1);

    case '%':
      return perCent(num1);
  }
}

// 4. Create function to display numbers on screen

// function displayNum(num1, num2, operator) {
//   ui.num1El.textContent = num1;
//   ui.num2El.textContent = num2;
//   ui.operatorEl.textContent = operator;
// }

// 5. Create function to update numbers
let currentInput = ''; // Variable to hold the current user input (numbers and operators)

ui.buttonEl.forEach((button) =>
  button.addEventListener('click', (e) => {
    const value = e.target.value;

    if (numbers.includes(parseInt(value)) || value === '.') {
      currentInput += value;
      if (!operator) {
        // If the operator is not set yet, update the first number (num1)
        ui.num1El.textContent = currentInput;
      } else {
        // If the operator is set, update the second number (num2)
        ui.num2El.textContent = currentInput;
      }
    } else if (operators.includes(value)) {
      if (num1 === '') {
        // If num1 is empty, set it to the current input
        num1 = parseFloat(currentInput);
        operator = value;
        ui.operatorEl.textContent = value; // Display the selected operator
        currentInput = ''; // Reset current input for the next number
      }
    } else if (value === '=') {
      if (num1 !== '' && currentInput !== '') {
        // If both num1 and num2 are available, perform the operation
        num2 = parseFloat(currentInput);
        ui.resultsEl.textContent = operate(num1, num2, operator);

        // Update the UI to display the current operation and result
        const operationString = formatOperation(num1, num2, operator);
        ui.resultsEl.textContent = `${operationString} = ${ui.resultsEl.textContent}`;

        // Reset all variables for the next operation
        num1 = '';
        num2 = '';
        operator = undefined;
        currentInput = '';
        ui.num1El.textContent = ''; // Clear the displayed numbers and operator
        ui.num2El.textContent = '';
        ui.operatorEl.textContent = '';
      }
    } else if (value === 'c') {
      // If the user clicks on "c" clear all variables and reset the UI
      num1 = '';
      num2 = '';
      operator = undefined;
      currentInput = '';
      ui.num1El.textContent = '';
      ui.num2El.textContent = '';
      ui.operatorEl.textContent = '';
      ui.resultsEl.textContent = '';
    }
  })
);
