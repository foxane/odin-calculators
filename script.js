const display = document.getElementById('display');
const btns = document.querySelectorAll('button');
const inputArr = [];
let result = 0;
const OPERATOR = ['+', '-', '*', '/'];

const arithmetic = {
  '+': (operand1, opreand2) => operand1 + opreand2,
  '-': (operand1, opreand2) => operand1 - opreand2,
  '*': (operand1, opreand2) => operand1 * opreand2,
  '/': (operand1, opreand2) => operand1 / opreand2,
};

const containOperator = (arr) =>
  arr.some((element) => OPERATOR.includes(element));
// Adding event handler for all btns
btns.forEach((btn) =>
  btn.addEventListener('click', function () {
    inputHandler(btn);
    display.value = inputArr.join('');
  })
);

function inputHandler(btnNode) {
  if (
    btnNode.classList.contains('number') ||
    btnNode.classList.contains('operator') ||
    btnNode.classList.contains('dot')
  ) {
    inputFilter(btnNode);
  } else if (btnNode.classList.contains('function')) {
    functionHandler(btnNode);
  }
}

function inputFilter(btn) {
  // Dot
  if (btn.classList.contains('dot') && floatValidation(inputArr)) {
    // Input array is empty
    if (inputArr.length === 0) {
      inputArr.push(0);
      inputArr.push('.');
      // Input array already contain dot
    } else if (inputArr.includes('.')) {
      return;
    } else {
      inputArr.push('.');
    }
    // Number
  } else if (btn.classList.contains('number')) {
    // Input array is empty and number is 0
    if (inputArr.length === 0 && btn.id === '0') {
      return;
    } else {
      inputArr.push(btn.id);
    }
    // OPerator
  } else {
    if (!containOperator(inputArr) && inputArr.length > 0) {
      inputArr.push(btn.textContent);
    } else {
      operate();
    }
  }
}

function operate() {
  calculate();
  console.log('calculate');
}
function calculate() {
  const [operator, ...bugTrap] = inputArr.filter(
    (el) => isNaN(el) && el !== '.'
  );
  const operand1 = parseFloat(
    inputArr.slice(0, inputArr.indexOf(operator)).join('')
  );
  const opreand2 = parseFloat(
    inputArr.slice(inputArr.indexOf(operator + 1)).join('')
  );
  inputArr.length = 0;

  inputArr.push(arithmetic[operator](operand1, opreand2));
}

function floatValidation(arr) {
  let dotCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      // Reset dot count when encountering a number
      dotCount = 0;
    } else if (arr[i] === '.') {
      dotCount++;
      if (dotCount > 1) {
        return false; // More than one dot between operators
      }
    } else if (OPERATOR.includes(arr[i])) {
      // Reset dot count when encountering an operator
      dotCount = 0;
    }
  }

  return true; // Valid expression
}
