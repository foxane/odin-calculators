const inputDisplay = document.getElementById('input-display');
const outputDisplay = document.getElementById('output-display');
const keys = document.querySelectorAll('button');

let operand = '',
  operator = '',
  stack = [];

keys.forEach((key) =>
  key.addEventListener('click', (e) => {
    // Number pressed
    if (key.classList.contains('number')) {
      console.log(key.textContent);
    }
    // Operator pressed
    else if (key.classList.contains('operator')) {
      console.log(key);
    }
    // Equal pressed
    else if (key.classList.contains('equal')) {
      console.log(key);
    }
    // Delete pressed
    else if (key.id === 'delete') {
      console.log(key);
    }
    // Clear pressed
    else if (key.id === 'clear') {
      console.log(key);
    }
  })
);

function appendNumber(num) {
  // TODO: Check if num is dot, if it is:
  // TODO: Check if operand contains more than 1 dot. If condition before is false,
  // TODO: Append num to operand
}
function appendOperator(operator) {
  // TODO1: Check if operator is '-', else ignore todo2
  // Todo2: Check if operand is null, if it is Append '-' to operand, else finish sequence below
  //
  // TODO: when operator button is pressed, all value that has been inputed will be pushed onto stack. Dont forget to parse it into number!
  //
  // TODO: If operator has value, Immediately call calculate() and append received operator into operator variable. and push result from calculate to operand.
}
function deleteLastItem(operand) {
  return operand.slice(0, -1);
}
function clearEverything() {
  operand = '';
  operator = '';
  stack = [];
}
function calculate(stack, operator) {
  // Check what operator to use
  switch (operator) {
    case 'sum':
      return arithmetic.sum(stack);
    case 'sub':
      return arithmetic.sub(stack);
    case 'mul':
      return arithmetic.mul(stack);
    case 'div':
      return arithmetic.div(stack);
  }
}

// Operations they takes array as argument
const arithmetic = {
  sum: (stack) => stack[0] + stack[1],
  sub: (stack) => stack[0] - stack[1],
  mul: (stack) => stack[0] * stack[1],
  div: (stack) => stack[0] / stack[1],
};
