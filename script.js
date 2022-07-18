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
    case '—':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
  }
}

let displayValue = '';
const validInput = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

function displayInput(input) {
  let char = input;
  displayValue += char;
  spanOutput.textContent = displayValue;
}

function clearDisplay() {
  spanOutput.textContent = '0';
  displayValue = '';
}

function deleteInput() {
  if (!displayValue) return;

  displayValue = displayValue.slice(0, -1);
  if (!displayValue)
    spanOutput.textContent = '0';
  else
    spanOutput.textContent = displayValue;
}

const operatorInput = ['+', '—', 'x', '÷'];
const valueStorage = [];

function storeInput(operator) {
  if (!displayValue) return;

  let operation = operator;

  valueStorage.push(displayValue);
  displayValue += operation;
  spanOutput.textContent = displayValue;
}

function selectInput(e) {
  if (!e.target.type) return;
  let input = e.target.textContent;

  switch (true) {
    case validInput.includes(input):
      displayInput(input);
      break;
    case input == 'C':
      clearDisplay();
      break;
    case input == 'DEL':
      deleteInput();
      break;
    case operatorInput.includes(input):
      storeInput(input);
      break;
  }
}

window.addEventListener('click', selectInput);