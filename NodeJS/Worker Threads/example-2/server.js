import express from "express";
import { Worker } from "worker_threads";

const app = express();

app.get("/blocking", (req, res) => {
  let startTime = Date.now();

  let worker = new Worker("./worker.js"); //! creating an instance of Worker class (a worker thread is created)

  //? listening to the message event, which is emitted by worker thread once the task is completed
  worker.on("message", (data) => {
    res.status(200).json({
      success: true,
      count: data,
      message: "Blocking",
      timeTaken: (Date.now() - startTime) / 1000,
    });
  });

  worker.on("error", (err) => {
    console.log(err);
  });
});

app.get("/non-blocking", (req, res) => {
  let startTime = Date.now();
  res.status(200).json({
    success: true,
    message: "Non blocking",
    timeTaken: Date.now() - startTime,
  });
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running");
});
