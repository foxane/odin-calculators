const display = document.getElementById('display');
const keys = document.querySelectorAll('button');

let input = '',
  operator = '',
  operand = [],
  result = 0;

keys.forEach((key) =>
  key.addEventListener('click', function () {
    console.log('Button clicked', key.textContent);
    if (key.classList.contains('number')) {
      console.log('Appending number');
      appendNumber(key.textContent);
    } else if (key.id === 'dot') {
      console.log('Appending dot');
      appendDot();
    } else if (key.classList.contains('operator')) {
      console.log('Appending operator');
      appendOperator(key.id);
      console.log('input', input, 'operand', operand, 'operator', operator);
    } else if (key.if === 'equal') {
      // Do when ewual clicked
    } else if (key.id === 'delete') {
      // Do when delete
    } else if (key.id === 'clear') {
      // Eraasaaaaaaaaaaaaaase
    }
    display.value = input;
    console.log('input', input);
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
    operand.push(input);
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
}
