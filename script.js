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
  for (let i = 1; i < args.length; i++) {
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
    return add(previousValue, currentValue)
  }
  if (operator === '-') {
    return subtract(previousValue, currentValue)
  }
  if (operator === 'x') {
    return multiply(previousValue, currentValue)
  }
  if (operator === '÷') {
    return divide(previousValue, currentValue)
  }
}

let currentDisplay = document.querySelector('.currentDisplay');
let previousDisplay = document.querySelector('.previousDisplay')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal')

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
  if (!previousDisplay.textContent.includes(op)) {
    if (!currentValue !== '') {
      operator = op;
      previousValue = currentValue;
      currentValue = '';
    }
  }
}

clear.addEventListener('click', cleared)

function cleared() {
  currentValue = '';
  previousValue = '';
  operator = '';
  currentDisplay.textContent = ''; 
  previousDisplay.textContent = '';
}

equal.addEventListener('click', equalled)

function equalled () {
  previousDisplay.textContent += ' ' + currentValue;
  currentValue = operate(parseFloat(currentValue), operator, parseFloat(previousValue));
  currentDisplay.textContent = currentValue;
}

function deleted () {
    if (currentValue.length > 1) {
      currentValue = currentValue.toString()
    currentValue = currentValue.slice(0,-1);
    currentDisplay.textContent = currentValue;
    }
}

del.addEventListener('click', deleted)


decimal.addEventListener('click', decimalised)

function decimalised () {
  if (currentValue.includes('.')) {
  }
  else {
    currentValue += '.'
 currentDisplay.textContent = currentValue
  }
 
}