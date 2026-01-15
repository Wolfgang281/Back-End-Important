import { parentPort, workerData } from "node:worker_threads";
console.log("workerData: ", workerData);

let count = 0;
for (let i = 0; i < 10000000000 / workerData.THREAD_COUNT; i++) {
  count++;
}

parentPort.postMessage(count);
