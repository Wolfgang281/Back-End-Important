import express from "express";
import cluster from "node:cluster";
import os from "node:os";

const app = express();

let cores = os.availableParallelism(); // no. of cores in my CPU

if (cluster.isPrimary) {
  console.log("this is master process", process.pid);
  for (let i = 0; i < cores; i++) {
    cluster.fork(); // creates child process
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.get("/me", (req, res) => {
    for (let i = 0; i < 1000000; i++) {}
    console.log(process.pid);
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
}

// https://www.digitalocean.com/community/tutorials/how-to-use-multithreading-in-node-js

// https://www.digitalocean.com/community/tutorials/how-to-scale-node-js-applications-with-clustering

//? 123k
