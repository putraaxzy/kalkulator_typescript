import inquirer from "inquirer";
import { createConnection } from "mysql";

const pool: any = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kalku",
});
const answers: {
  numberOne: number;
  numberTwo: number;
  operator: string;
  hasil: number;
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
const { numberOne, numberTwo, operator, hasil } = answers;

if (numberOne && numberTwo && operator) {
  let result: number = 0;
  if (operator === "+") {
    result = numberOne + numberTwo;
    const data: any = {
      angka1: numberOne,
      angka2: numberTwo,
      operator: operator,
      hasil: result,
    };
    pool.query("insert into kalku_ts set ?", data);
  } else if (operator === "-") {
    result = numberOne - numberTwo;
    const data: any = {
      angka1: numberOne,
      angka2: numberTwo,
      operator: operator,
      hasil: result,
    };
    pool.query("insert into kalku_ts set ?", data);
  } else if (operator === "/") {
    if (numberTwo !== 0) {
      result = numberOne / numberTwo;
      const data: any = {
        angka1: numberOne,
        angka2: numberTwo,
        operator: operator,
        hasil: result,
      };
      pool.query("insert into kalku_ts set ?", data);
    } else {
      console.error("Error: Division by zero");
    }
  } else if (operator === "*") {
    result = numberOne * numberTwo;
    const data: any = {
      angka1: numberOne,
      angka2: numberTwo,
      operator: operator,
      hasil: result,
    };
    pool.query("insert into kalku_ts set ?", data);
  } else {
    console.error("Error: Invalid operator");
  }
  // menampilkan hasil atau result
  console.log("Hasil kamu adalah: ", result);
  pool.end();
}
