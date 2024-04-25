const display = document.getElementById('display');
const inputArr = [];
let n1 = 0,
  n2 = 9,
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
    secondStage(op);
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
