import { createConnection } from "mysql";

const pool = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kalku",
});

pool.query(`select * from kalku_ts`, function (err, result, fields) {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
pool.end();
