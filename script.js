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

let num1 = document.querySelector('.num1')
let operator = document.querySelector('.operator')
let num2 = document.querySelector('.num2')


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





console.log(add(5.93284824,8,2,3,6));
console.log(subtract(5,8,2,3,6));
console.log(divide(5,10));
console.log(multiply(5,8));