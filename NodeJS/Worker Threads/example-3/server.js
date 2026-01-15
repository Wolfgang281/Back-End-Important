import express from "express";
import { Worker } from "worker_threads";

let THREAD_COUNT = 5;
function createWorkers() {
  return new Promise((res, rej) => {
    const worker = new Worker("./worker.js", {
      workerData: { THREAD_COUNT },
    });

    worker.on("message", (data) => {
      console.log(data);
      res(data);
    });

    worker.on("error", (err) => {
      rej(err);
    });
  });
}

const app = express();

app.get("/blocking", async (req, res) => {
  let startTime = Date.now();
  let workerPromise = [];

  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromise.push(createWorkers());
  }

  console.log(workerPromise);

  let resolvedWorkers = await Promise.all(workerPromise);
  console.log("resolvedWorkers: ", resolvedWorkers);

  let count = 0;
  for (let i = 0; i < resolvedWorkers.length; i++) {
    count += resolvedWorkers[i];
  }

  res.status(200).json({
    success: true,
    count,
    message: "Blocking",
    timeTaken: (Date.now() - startTime) / 1000,
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

//! code optimize --> worker threads
//! app scale --> cluster
