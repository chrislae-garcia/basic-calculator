const spanOutput = document.querySelector('.output');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  thisOperator = operator;

  switch (thisOperator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

let displayValue = '';

function displayToScreen(e) {
  if (!e.target.type) return;
  let input = e.target.textContent;

  switch (true) {
    case parseInt(input) >= 0:
    case parseInt(input) <= 9:
      displayValue += input;
      spanOutput.textContent = displayValue;
  }
}

window.addEventListener('click', displayToScreen);