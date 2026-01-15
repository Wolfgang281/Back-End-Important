import { parentPort } from "node:worker_threads";
// destructuring parentPort() from "worker_threads" module, to connect with the main thread

// throw new Error("this is an error");

let count = 0;
//libUV (handles all the async IO operations (file reading, db call, nw call))
for (let i = 0; i < 10000000000; i++) {
  count++;
}

parentPort.postMessage(count);
//? sending the count to the main thread

// object.emit("message", count);
