const calculatorInput = document.querySelector("#lower .calculator-input");
let expressionArray = [];

//operator buttons
const operatorButtons = [
  ...document.querySelectorAll(".calculator-button.operator"),
];
operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      calculatorInput.value != "" &&
      calculatorInput.value != "x" &&
      calculatorInput.value != "÷" &&
      calculatorInput.value != "+" &&
      calculatorInput.value != "-" &&
      calculatorInput.value != "%"
    ) {
      expressionArray.push(Number(calculatorInput.value));
      expressionArray.push(item.value);
      calculatorInput.value = "";

      calculatorInput.value += item.textContent;
    } else if (expressionArray.length != 0 && calculatorInput.value == "") {
      expressionArray.push(item.value);

      calculatorInput.value += item.textContent;
    }
  });
});

//number buttons
const numberButtons = [
  ...document.querySelectorAll(".calculator-button.number"),
];
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      calculatorInput.value == "x" ||
      calculatorInput.value == "÷" ||
      calculatorInput.value == "+" ||
      calculatorInput.value == "-" ||
      calculatorInput.value == "%"
    ) {
      calculatorInput.value = "";
      calculatorInput.value += item.value;
    } else {
      calculatorInput.value += item.value;
    }
  });
});

//backspace button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  calculatorInput.value = "";
  expressionArray = [];
});

//del button
const DelButton = document.querySelector("#backspace");
DelButton.addEventListener("click", () => {
  if (
    calculatorInput.value == "x" ||
    calculatorInput.value == "÷" ||
    calculatorInput.value == "+" ||
    calculatorInput.value == "-" ||
    calculatorInput.value == "%"
  ) {
    expressionArray.pop();
    calculatorInput.value = "";
  } else {
    calculatorInput.value = calculatorInput.value.slice(0, -1);
  }
});

//creating objects to map operators with their indexes
let higherpref = {};
let lowerpref = {};

//higher preference operator calculation
let highePrefEvaluate = (array) => {
  for (i = 0; i < array.length; i++) {
    item = array[i];
    if (item === "*" || item === "/" || item === "%") {
      higherpref[i] = item;
    }
  }

  let j = 1;
  let diff = 0;
  for (key in higherpref) {
    if (j == 1) {
      if (higherpref[key] === "/") {
        let keye = Number(key);
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a / b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${higherpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      } else if (higherpref[key] === "%") {
        let keye = Number(key);
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a % b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${higherpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      } else if (higherpref[key] === "*") {
        let keye = Number(key);
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a * b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${higherpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      }
    } else {
      if (higherpref[key] == "/") {
        let keye = Number(key) + diff;
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a / b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${higherpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      } else if (higherpref[key] === "%") {
        let keye = Number(key) + diff;
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a % b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${higherpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      } else if (higherpref[key] === "*") {
        let keye = Number(key) + diff;
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a * b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${higherpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      }
    }
    j++;
    diff = diff - 2;
  }
};

//lower preference operator calculation
let lowerPrefEvaluate = (array) => {
  for (i = 0; i < array.length; i++) {
    item = array[i];
    if (item === "+" || item === "-") {
      lowerpref[i] = item;
    }
  }
  let j = 1;
  let diff = 0;
  for (key in lowerpref) {
    if (j == 1) {
      if (lowerpref[key] === "+") {
        let keye = Number(key);
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a + b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${lowerpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      } else if (lowerpref[key] === "-") {
        let keye = Number(key);
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a - b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${lowerpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      }
    } else {
      if (lowerpref[key] === "+") {
        let keye = Number(key) + diff;
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a + b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${lowerpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      } else if (lowerpref[key] === "-") {
        let keye = Number(key) + diff;
        let a = array[keye - 1];
        let b = array[keye + 1];
        let res = a - b;
        array.splice(keye - 1, 3, res);
        console.log(array);
        console.log(`res = ${res}`);
        console.log(`item is ${lowerpref[key]}}`);
        console.log(`a= ${a} and b=${b}`);
        console.log(`key is ${key}`);
        console.log(higherpref);
        console.log(lowerpref);
      }
    }
    j++;
    diff = diff - 2;
  }
};

//Equal Button assigned task
const EqualButton = document.querySelector("#equal");
EqualButton.addEventListener("click", () => {
  if (
    calculatorInput.value != "" &&
    calculatorInput.value != "*" &&
    calculatorInput.value != "/" &&
    calculatorInput.value != "+" &&
    calculatorInput.value != "-" &&
    calculatorInput.value != "%"
  ) {
    expressionArray.push(Number(calculatorInput.value));
  
  highePrefEvaluate(expressionArray);
  lowerPrefEvaluate(expressionArray);
  console.log(expressionArray);
  calculatorInput.value = String(expressionArray[0]);
  higherpref = {};
  lowerpref = {};
  expressionArray = [];
  }
});

//key board linking with buttons
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const modulus = document.querySelector("#mod");

document.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    one.click();
  }
  if (e.key == 2) {
    two.click();
  }
  if (e.key == 3) {
    three.click();
  }
  if (e.key == 4) {
    four.click();
  }
  if (e.key == 5) {
    five.click();
  }
  if (e.key == 6) {
    six.click();
  }
  if (e.key == 7) {
    seven.click();
  }
  if (e.key == 8) {
    eight.click();
  }
  if (e.key == 9) {
    nine.click();
  }
  if (e.key == 0) {
    zero.click();
  }
  if (e.key == ".") {
    dot.click();
  }
  if (e.key == "+") {
    plus.click();
  }
  if (e.key == "-") {
    minus.click();
  }
  if (e.key == "*") {
    multiply.click();
  }
  if (e.key == "x") {
    multiply.click();
  }
  if (e.key == "X") {
    multiply.click();
  }
  if (e.key == "/") {
    e.preventDefault();
    divide.click();
  }
  if (e.key == "%") {
    modulus.click();
  }
  if (e.key == "C") {
    clearButton.click();
  }
  if (e.key == "c") {
    clearButton.click();
  }
  if (e.key == "Backspace") {
    DelButton.click();
  }
  if (e.key == "=") {
    EqualButton.click();
  }
  if (e.key == "Enter") {
    EqualButton.click();
  }
});
