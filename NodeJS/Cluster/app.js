import express from "express";
import os from "node:os";

// console.log(os.cpus().length);
console.log(os.availableParallelism());

const app = express();

app.get("/me", (req, res) => {
  for (let i = 0; i < 1000000; i++) {}
  //   throw new Error("this is an error");

  res.status(200).json({
    success: true,
    message: "Blocking",
    pid: process.pid,
  });
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("running on pid", process.pid);
});

//? autocannon --> load testing
// autocannon http://localhost:9000/me -d 10 -c 100 (33k)
// npm i autocannon -g
