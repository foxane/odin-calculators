const inputDisplay = document.getElementById('input-display');
const outputDisplay = document.getElementById('output-display');
const keys = document.querySelectorAll('button');

let operand = '',
  globalOperator = '',
  stack = [];

keys.forEach((key) =>
  key.addEventListener('click', (e) => {
    // Number pressed
    if (key.classList.contains('number')) {
      appendNumber(key.textContent);
      updateDisplay();
    }
    // Operator pressed
    else if (key.classList.contains('operator')) {
      appendOperator(key.id);
      debug();
    }
    // Equal pressed
    else if (key.classList.contains('equal')) {
      stack.push(parseInt(operand));
      outputDisplay.value = calculate(stack, globalOperator);
    }
    // Delete pressed
    else if (key.id === 'delete') {
      console.log(key);
      debug();
    }
    // Clear pressed
    else if (key.id === 'clear') {
      clearEverything();
      debug();
    }
  })
);

function appendNumber(num) {
  // If operand ONLY have 0, and num is 0 remove the zero
  if (operand === '0' && num === '0') operand = '';
  if (num === '.') {
    // Add zero before dot if operand is falsy or if operand only contains negative symbol
    if (!operand || operand === '-') {
      operand += '0.';
      // Add dot if operand has value and does not contains dot
    } else if (operand && !operand.includes('.')) {
      operand += '.';
      // If operand has value and contain dot, do nothing
    } else {
      return;
    }
    // Add number to operand if num is not dot
  } else {
    operand += num;
  }
}

function appendOperator(operator) {
  // TODO: If operator has value, Immediately call calculate() and append received operator into operator variable. and push result from calculate to operand.

  // TODO1: Check if operator is 'sub', else ignore todo2

  if (operator === 'sub') {
    // Todo2: Check if operand is null, Append '-' to operand, else finish sequence below
    if (!operand) {
      operand += '-';
    } else {
      globalOperator = operator;
    }
  } else {
    globalOperator = operator;
  }
  if (!operand) return;
  // TODO: when operator button is pressed, operand will be pushed onto stack. Dont forget to parse it into number!
  stack.push(parseInt(operand));
  operand = '';
  // Check if everything is filled
  if (globalOperator && stack[0] && stack[1]) {
    stack.push(parseInt(operand));
    console.log(calculate(stack, operator));
  }
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
  // Reset all global variable
  globalOperator = '';
  operand = '';
  stack = [];
}

// Operations they takes array as argument
const arithmetic = {
  sum: (stack) => stack[0] + stack[1],
  sub: (stack) => stack[0] - stack[1],
  mul: (stack) => stack[0] * stack[1],
  div: (stack) => stack[0] / stack[1],
};

function debug() {
  console.log(`
  Operand: ${operand}
  Operator: ${globalOperator}
  Stack: ${stack[0]} ${stack[1]}
  `);
}

// Update display
const updateDisplay = function () {
  inputDisplay.value = operand;
};
