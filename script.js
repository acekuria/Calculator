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
    if (previousDisplay.textContent.includes('=')) {

    }
    currentDisplay.textContent = currentValue;
  }); 
})

function handleNumber(num) {
    currentValue += num;
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
  if (previousDisplay.textContent.includes('=')) {

  } else {
    previousDisplay.textContent += ' ' + currentValue + ' ' + '=';
    currentValue = operate(parseFloat(currentValue), operator, parseFloat(previousValue));
    currentDisplay.textContent = currentValue; 
  }
  
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
    currentValue += '.';
    currentDisplay.textContent = currentValue;
  }
 
}

window.addEventListener('keydown', function(e) {
  // Get the key code of the pressed key
  const key = e.keyCode;
  console.log(key)
  console.log(String.fromCharCode(key))
  // Handle numeric keys and decimal point
  if (key >= 48 && key <= 57) {
     let num = String.fromCharCode(key);
      handleNumber(num);
      currentDisplay.textContent = currentValue;
    }
  
  
  // Handle operator keys
  if ((key === 187) || key === 189 || key === 88 || key === 191) {
    // Get the operator from the key code
    let operator = '';
    switch(key) {
      case 187:
        operator = '+';
        break;
      case 189:
        operator = '-';
        break;
      case 88:
        operator = 'x';
        break;
      case 191:
        operator = '÷';
        break;
    }
    handleOperator(operator);
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = previousValue + ' ' + operator;
  }
  
  // Handle equal key
  if (key === 13) {
    equalled();
  }

  // Handle delete key
  if (key === 8) {
    deleted();
  }
  
  // Handle decimal key
  if (key === 190 || key === 110) {
    decimalised();
  }
});