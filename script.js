const display = document.getElementById('display');
const btns = document.querySelectorAll('button');
let inputArr = [];
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
  if (btn.classList.contains('dot')) {
    // TODO: Fix dot
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
  const operand1 = parseInt(
    inputArr.slice(0, inputArr.indexOf(operator)).join('')
  );
  const opreand2 = parseInt(
    inputArr.slice(inputArr.indexOf(operator)).join('')
  );
  inputArr = '';

  inputArr = arithmetic[operator](operand1, opreand2).toString().split('');

  console.log('operand1', operand1, 'operand2', opreand2, operator);
}
