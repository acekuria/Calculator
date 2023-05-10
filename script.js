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

let previousValue = '';
let operator = '';
let currentValue = '';


function operate (currentValue, operator, previousValue) {
  if (operator === '+') {
    return add(currentValue, previousValue)
  }
  if (operator === '-') {
    return subtract(currentValue, previousValue)
  }
  if (operator === '*') {
    return multiply(currentValue, previousValue)
  }
  if (operator === '/') {
    return divide(currentValue, previousValue)
  }
}

const currentDisplay = document.querySelector('.currentDisplay');
const previousDisplay = document.querySelector('.previousDisplay')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal')

numbers.forEach(number => {
  number.addEventListener('click', function (e) {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentValue;
  }); 
})

function handleNumber(num) {
  if (currentValue.length < 5) {
    currentValue += num;
  }
}

operators.forEach(oper => {
  oper.addEventListener('click', function (e) {
    handleOperator(e.target.textContent);
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = previousValue + ' ' + operator;
    
  })
   });

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = ''

}
