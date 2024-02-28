import inquirer from "inquirer";

const answers: {
  numberOne: number;
  numberTwo: number;
  operator: string;
} = await inquirer.prompt([
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
const { numberOne, numberTwo, operator } = answers;

if (numberOne && numberTwo && operator) {
  let result: number = 0;
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
