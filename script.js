const display = document.getElementById('display');
const btns = document.querySelectorAll('button');
const inputArr = [];
let result = 0;

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

function inputFilter(btn) {}
