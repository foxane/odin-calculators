const display = document.getElementById('display');
const keys = document.querySelectorAll('button');

let input = '',
  operand1 = 0,
  operand2 = 0,
  operator = '';

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
      operator = key.id;
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
  if (input) {
    if (input.includes('.')) {
      return;
    } else {
      input += '.';
    }
  } else {
    input = '0.';
  }
}
