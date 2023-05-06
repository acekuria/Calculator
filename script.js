function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

function add (...args) {
  let total = 0
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return roundToTwo(total)
}

function subtract (...args) {
  let total = args[0]
  for (let i = 0; i < args.length; i++) {
    total -= args[i];
  }
  return roundToTwo(total)
}

function multiply (...args) {
  let total = 1
  for (let i = 0; i < args.length; i++) {
    total *= args[i];
  }
  return roundToTwo(total) 
}

function divide (...args) {
  let total = args[0]
  for (let i = 1; i < args.length; i++) {
    total /= args[i];
  }
  return roundToTwo(total) 
}

let num1 = null;
let operator = null;
let num2 = null;


function operate (num1, operator, num2) {
  if (operator === '+') {
    return add(num1, num2)
  }
  if (operator === '-') {
    return subtract(num1, num2)
  }
  if (operator === '*') {
    return multiply(num1, num2)
  }
  if (operator === '/') {
    return divide(num1, num2)
  }
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal')

function populateDisplay (event) {
  const button = event.target;
  const value = button.textContent;
  if ( value.length < 7) {
    display.textContent += value;
  }
}

function operatorDisplay(event) {
  const button = event.target;
  const value = button.textContent;
  if ( value.length <1) {
    display.textContent += value;
  }

}


operators.forEach(operator => {
  operator.addEventListener('click', operatorDisplay)
   });

numbers.forEach(number => {
  number.addEventListener('click', populateDisplay); 
})

// You’ll need to store the first number that is input into the calculator when a user presses an operator
