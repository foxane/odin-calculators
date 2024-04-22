const display = document.getElementById('display');

let input = '';
let operator = '';

const keys = document.querySelectorAll('button');

keys.forEach((key) =>
  key.addEventListener('click', function () {
    if (key.classList.contains('number')) {
      input += key.textContent;
    } else if (key.classList.contains('operator')) {
      operator = key.id;
    } else if (key.if === 'equal') {
      // Do when ewual clicked
    } else if (key.id === 'delete') {
      // Do when delete
    } else if (key.id === 'clear') {
      // Eraasaaaaaaaaaaaaaase
    }
  })
);
