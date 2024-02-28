"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Masukan Angka Pertama: ",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Masukan Angka Kedua: ",
  },
  {
    type: "list",
    name: "operator",
    choices: ["*", "+", "-", "/"],
    message: "Pilih Operator: ",
  },
]);
// menampilkan output hasil
var numberOne = answers.numberOne,
  numberTwo = answers.numberTwo,
  operator = answers.operator;
if (numberOne && numberTwo && operator) {
  var result = 0;
  if (operator === "+") {
    result = numberOne + numberTwo;
  } else if (operator === "-") {
    result = numberOne - numberTwo;
  } else if (operator === "/") {
    if (numberTwo !== 0) {
      result = numberOne / numberTwo;
    } else {
      console.error("Error: Division by zero");
    }
  } else if (operator === "*") {
    result = numberOne * numberTwo;
  } else {
    console.error("Error: Invalid operator");
  }
  // menampilkan hasil atau result
  console.log("Hasil kamu adalah: ", result);
}
