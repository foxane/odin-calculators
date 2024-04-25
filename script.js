const display = document.getElementById('display');
// Values
const inputArr = [];
let g_n1 = 0,
  g_n2 = 0,
  g_op = '';

// Status
let isFirstStage = false,
  isSecondStage = false;

// Button event listener
document.querySelectorAll('button').forEach((btn) =>
  btn.addEventListener('click', function () {
    if (btn.classList.contains('number')) {
      appendNumber(btn.textContent);
    } else if (btn.classList.contains('dot')) {
      appendDot();
    } else if (btn.classList.contains('operator')) {
      appendOperator(btn.textContent);
    } else if (btn.classList.contains('function')) {
      functionHandler(btn.id);
    }
    display.value = inputArr.join('');
  })
);

// Button event handler
function appendNumber(n) {
  inputArr.push(n);
}

function appendDot() {
  for (el of inputArr) {
    if (el === '.') {
      return;
    }
  }
  inputArr.push('.');
}

function appendOperator(op) {
  if (inputArr.length === 0 && op === '-') {
    // Negative number handler
    inputArr.push(op);
  } else if (inputArr.length === 0) {
    return;
  } else {
    firstStage(op);
  }
}

function functionHandler(func) {
  if (func === 'equal') {
    operate();
  } else if (func === 'delete') {
    deleteNum();
  } else if (func === 'clear') {
    clearEverything();
  }
}

// Main Logic
// First stage is where g_n1 and g_op is defined '123 + ', '0913 - '
function firstStage(op) {
  if (isFirstStage) {
    secondStage(op);
  } else {
    g_n1 = parseFloat(inputArr.join(''));
    g_op = op;
    inputArr.length = 0;
    isFirstStage = true;
  }
  console.log(g_n1, g_n2, g_op);
}

// Second is where g_n1 and g_n2 and g_op is defined
function secondStage(op) {
  if (isSecondStage) {
    operate(op);
  } else {
    g_n2 = parseFloat(inputArr.join(''));
    console.log(g_n1, g_n2, g_op);
    isSecondStage = true;
  }
}

function operate(op) {
  // When second operator is passed from secondStage(user did not click equal)
  if (op) {
  }
}
