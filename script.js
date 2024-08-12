let firstOperand = "";
let secondOperand = "";
let operator = "";
let shouldResetDisplay = false;

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Error: Division by zero";
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return "Invalid expression";
  }
}

function pressButton() {
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonPress(button.textContent);
    });
  });
}

function updateDisplay(value) {
  const display = document.querySelector(".display");
  if (shouldResetDisplay) {
    display.innerHTML = "";
    shouldResetDisplay = false;
  }
  display.innerHTML += value;
}

function handleOperator(pressedResult) {
  const display = document.querySelector(".display");
  firstOperand = display.innerHTML;
  operator = pressedResult;
  shouldResetDisplay = true;
}

function handleEqual() {
  const display = document.querySelector(".display");
  secondOperand = display.innerHTML;
  const result = operate(
    parseFloat(firstOperand),
    parseFloat(secondOperand),
    operator
  );
  display.innerHTML = result;
  firstOperand = result;
  secondOperand = "";
  operator = "";
}

function handleClear() {
  const display = document.querySelector(".display");
  display.innerHTML = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
}

function handleButtonPress(pressedResult) {
  if (pressedResult >= "0" && pressedResult <= "9") {
    updateDisplay(pressedResult);
  } else if (["+", "-", "*", "/"].includes(pressedResult)) {
    handleOperator(pressedResult);
  } else if (pressedResult === "=") {
    handleEqual();
  } else if (pressedResult === "C") {
    handleClear();
  }
}

pressButton();
