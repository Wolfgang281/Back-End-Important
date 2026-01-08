//! why we should not use synchronous code in NodeJS
//! because it will block the event loop

import crypto from "crypto";

let startTime = Date.now();

// crypto.pbkdf2Sync("password", "salt", 1000000, 512, "sha512");

// let endTimeOfF1 = Date.now();
// let timeTakenF1 = ((endTimeOfF1 - startTime) / 1000).toFixed(2);
// console.log(timeTakenF1);

// crypto.pbkdf2Sync("password", "salt", 1000000, 512, "sha512");

// let endTime = Date.now();
// let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
// console.log(`${timeTaken} seconds`);

// crypto.pbkdf2Sync("password", "salt", 1000000, 512, "sha512");

//~ ==========================================================================

crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", (err) => {
  let endTime = Date.now();
  let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`${timeTaken} seconds`);
});

crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", (err) => {
  let endTime = Date.now();
  let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`${timeTaken} seconds`);
});

crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", (err) => {
  let endTime = Date.now();
  let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`${timeTaken} seconds`);
});

crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", (err) => {
  let endTime = Date.now();
  let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`${timeTaken} seconds`);
});

crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", (err) => {
  let endTime = Date.now();
  let timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`${timeTaken} seconds`);
});

// UV_THREADPOOL_SIZE=5 node app
//~ to increase or decrease the thread pool size

//~ the threads that are being created are OS level threads, there is no limitation for creating these threads
//! but these threads are scheduled on system threads (cannot be modified)
//? so, at maximum the numbers of os level threads getting executed parallely is (in my case) 16 threads (tasks)
