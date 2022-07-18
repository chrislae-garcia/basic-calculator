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
  return (a / b).toFixed(2);
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
let hasDecimal = false;

function displayInput(input) {
  if (displayValue.length >= 9) return;

  let char = input;
  if (operation == '=') {
    operation = '';
    displayValue = '';
  }

  if (char == '.' && !hasDecimal)
    hasDecimal = true;
  else if (char == '.' && hasDecimal ||
    (displayValue == '' && char == '0'))
    return;

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

const operatorInput = ['+', '—', 'x', '÷', '='];
const valueStorage = [];
let operation = '';

function storeInput(operator) {
  if (!displayValue) return;

  calculate();
  spanOutput.textContent = displayValue;

  if (operator == '=')
    valueStorage.pop();
  else
    displayValue = '';

  operation = operator;
  hasDecimal = false;
}

function calculate() {

  valueStorage.push(displayValue);

  if (valueStorage.length > 1) {
    let firstNumber = parseFloat(valueStorage.at(-2));
    let secondNumber = parseFloat(valueStorage.at(-1));

    let result = operate(operation, firstNumber, secondNumber);
    valueStorage.pop();
    valueStorage[0] = result;
    displayValue = result;
  }
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