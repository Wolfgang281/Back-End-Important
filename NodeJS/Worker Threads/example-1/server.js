import express from "express";

const app = express();

app.get("/blocking", (req, res) => {
  let startTime = Date.now();
  let count = 0;
  //libUV (handles all the async IO operations (file reading, db call, nw call))
  for (let i = 0; i < 10000000000; i++) {
    count++;
  }

  res.status(200).json({
    success: true,
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
