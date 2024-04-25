const display = document.getElementById('display');
const operatorDisplay = document.getElementById('display-operator');
// Values
const inputArr = [];
let g_n1 = 0,
  g_n2 = 0,
  g_op = '';

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
    operatorDisplay.value = g_op ? g_op : '';
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
    staging(op);
  }
}

function functionHandler(func) {
  if (func === 'equal') {
    calculate();
  } else if (func === 'delete') {
    deleteNum();
  } else if (func === 'clear') {
    clearEverything();
  }
}

// Main Logic
function staging(op) {
  if (g_n1) {
    g_n2 = parseFloat(inputArr.join(''));
  } else {
    g_n1 = parseFloat(inputArr.join(''));
  }
  if (g_op) {
    calculate();
  } else {
    g_op = op;
  }
  inputArr.length = 0;
  console.log(g_n1, g_n2);
}

function calculate() {
  if (g_n1 && g_n2 && g_op) {
    let result = 0;
    switch (g_op) {
      case '+':
        result = g_n1 + g_n2;
        break;
      case '-':
        result = g_n1 - g_n2;
        break;
      case '*':
        result = g_n1 * g_n2;
        break;
      case '/':
        result = g_n1 / g_n2;
        break;
    }
    if (result > 9) {
      inputArr.length = 0;
      result = result.toString().split('');
      console.log(result);
      result.forEach((num) => inputArr.push(num));
    } else {
      inputArr.length = 0;
      inputArr.push(result);
    }
  } else if (!g_n2) {
    g_n2 = parseFloat(inputArr.join(''));
    calculate();
  }
  g_n1 = 0;
  g_n2 = 0;
  g_op = '';
}

function deleteNum() {
  if (inputArr.length === 0) {
    return;
  } else {
    inputArr.pop();
  }
}

function clearEverything() {
  g_n1 = 0;
  g_n2 = 0;
  g_op = '';
  inputArr.length = 0;
}
