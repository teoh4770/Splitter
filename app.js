// how do we count the tip?
// based on the tip%

// exp:

// if the bill is $10
// the tip is 50%
// then total would be 10 * 1.5 = 15
// if split amount a group of 5, then totalPerPerson = 15/5 = 3;
// tip amount would be tip / number of people 5 / 5 = 1

const billInput = document.getElementById("bill");
const btnTipInputs = document.querySelectorAll("button[name='tip-amount']");
const customTipInput = document.getElementById("custom");
const numberOfPeopleInput = document.getElementById("number-of-people");
const resetBtn = document.getElementById("reset");
const tipPerPersonResultEle = document.getElementById("tip-per-person-result");
const totalPerPersonResultEle = document.getElementById("total-per-person-result");

const numbers = "0123456789"
let bill = 0;
let tip = 0;
let people = 1;

testInput();
resetElements();
setEventListeners();








// let bill = null;
// let tip = null;
// let numberOfPeople = null;
// let tipPerPerson = null;
// let totalPerPerson = null;




/*********************/
/*** getter method ***/
/*********************/
function getBill() {
  return bill;
}

function getTip() {
  return getBill() * tip;
}

function getNumberOfPeople() {
  return people;
}

function getTipPerPerson() {
  if(getNumberOfPeople() <= 0) {
    return _formattedResult(0);
  }
  const tipPerPerson = getTip() / getNumberOfPeople();
  const formattedResult = _formattedResult(tipPerPerson);
  return formattedResult;
}

function getTotalPerPerson() {
  if(getNumberOfPeople() <= 0) {
    return _formattedResult(0);
  }
  const totalPerPerson = (getBill() + getTip()) / getNumberOfPeople();
  const formattedResult = _formattedResult(totalPerPerson);
  return formattedResult;
}
/*********************/

/*********************/
/*** setter method ***/
/*********************/
function setBill(e) {

  const val = parseFloat(e.target.value);
  if(val <= 0 || isNaN(val)) {
    bill = 0;
    e.target.value = "";
  }
  else {
    bill = val;
  }
  output();
}

function customizeTip(e) {
  const val = parseInt(e.target.value);
  if(val <= 0 || isNaN(val)) {
    tip = 0;
    e.target.value = "";
  }
  else {
      tip = val / 100;
      e.target.value = val;
  }
  output();
}

function setTip(e) {
  tip = parseInt(e.target.value) / 100;
  console.log(tip);
  output();
}

function setNumberOfPeople(e) {
  const val = parseInt(e.target.value)
  console.log(val);
  if(val <= 0 || isNaN(val)) {
    people = 0;
    e.target.value = "";
  }
  else {
    people = val;
  }
  
  output();
}

function reset() {
  [bill, tip, people].forEach(variable => {variable = 0});
  [billInput, customTipInput, numberOfPeopleInput].forEach(e => e.value = "");
  [tipPerPersonResultEle, totalPerPersonResultEle].forEach(e => e.textContent = "0.00");
}

/*********************/

/*********************/
/*** helper method ***/
/*********************/
function _formattedResult(amount, decimal = 2) {
  return (Math.round(amount * 100) / 100).toFixed(decimal)
}

function isFloat(x) {
  // check if passed value is a float value
  if(typeof x == "number" && !Number.isNaN(x) && !Number.isInteger(x)) {
    return true;
  }
  return false;
}

function testInput() {
  const inputList = [billInput, btnTipInputs, customTipInput, numberOfPeopleInput, resetBtn, tipPerPersonResultEle, totalPerPersonResultEle];
}

function checkKey(key) {
  return key in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
}
/*********************/


function setEventListeners() {
  billInput.addEventListener("input", setBill);
  btnTipInputs.forEach(btn => {
    btn.addEventListener("click", setTip);
  });
  customTipInput.addEventListener("input", customizeTip);
  numberOfPeopleInput.addEventListener("input", setNumberOfPeople);
  resetBtn.addEventListener("click", reset);
}

function resetElements() {
  billInput.value = "";
  customTipInput.value = "";
  numberOfPeopleInput.value = "";
}

function output() {
  tipPerPersonResultEle.textContent = getTipPerPerson();
  totalPerPersonResultEle.textContent = getTotalPerPerson();
}