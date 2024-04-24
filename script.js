const display = document.getElementById('display');
const btns = document.querySelectorAll('button');
const inputArr = [];
let result = 0;

const calculate = {
  sum: (operand1, opreand2) => operand1 + opreand2,
  sub: (operand1, opreand2) => operand1 - opreand2,
  mul: (operand1, opreand2) => operand1 * opreand2,
  div: (operand1, opreand2) => operand1 / opreand2,
};

const containOperator = function (arr) {
  const OPERATOR = ['+', '-', '*', '/'];
  return arr.some((element) => OPERATOR.includes(element));
};

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
      operator = btn.textContent;
    } else {
      operate();
    }
  }
}

function operate() {
  try {
  } catch (error) {
    display.value = 'FUCK YOU';
    inputArr.length = 0;
  }
}
