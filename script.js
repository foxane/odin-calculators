const display = document.getElementById('display');
const smallDisplay = document.getElementById('small-display');
const keys = document.querySelectorAll('button');

let input = '',
  operator = '',
  operand = [],
  result = 0;

const arithmathic = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
  '/': (operand1, operand2) => operand1 / operand2,
};

keys.forEach((key) =>
  key.addEventListener('click', function () {
    if (key.classList.contains('number')) {
      appendNumber(key.textContent);
    } else if (key.id === 'dot') {
      appendDot();
    } else if (key.classList.contains('operator')) {
      appendOperator(key.id);
    } else if (key.id === 'equal') {
      calculate();
    } else if (key.id === 'delete') {
      // Do when delete
    } else if (key.id === 'clear') {
      // Eraasaaaaaaaaaaaaaase
    }
    display.value = input;
  })
);

function appendNumber(num) {
  // if input dont have value num will not be added
  if (num === '0') {
    if (input) {
      input += num;
    } else {
      return;
    }
  } else {
    input += num;
  }
}

function appendDot() {
  // Check if input already contains dot
  if (input) {
    if (input.includes('.')) {
      return;
    } else {
      input += '.';
    }
    // Append zero if input has no value
  } else {
    input = '0.';
  }
}

function appendOperator(op) {
  // If all value is set
  if (operator && operand.length === 1 && input) {
    operand.push(parseInt(input));
    calculate();
    operator = op;
  } else {
    // Check if operator is minus
    if (op === '-') {
      // Decide whether minus is operator or operand
      if (input) {
        operator = op;
      } else {
        input += op;
      }
      // Operator other than minus
    } else {
      // Check if input has value
      if (input) {
        operator = op;
        operand.push(parseInt(input));
        input = '';
      } else {
        return;
      }
    }
  }
  updateDisplay();
}

function calculate() {
  if (input) operand.push(parseInt(input));
  console.log('calculating');
  console.log(typeof operand[0], typeof operand[1]);
  result = arithmathic[operator](operand[0], operand[1]);
  updateDisplay();
  operator = '';
  operand.pop();
}

function updateDisplay() {
  if (result) {
    smallDisplay.value = result;
    display.value = result;
  } else {
    smallDisplay.value = `${operand[0] ? operand[0] : ''} ${operator}`;
  }
}
