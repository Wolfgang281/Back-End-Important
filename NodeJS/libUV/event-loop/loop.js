//! two queues --> microtask (nextTick, queueMicrotask) and macrotask (timer queue, I/O queue, check queue, close queue)

// console.log(process);

// process.nextTick(callback);

// console.log("1");

// process.nextTick(() => {
//   console.log("this is NT 1");
// });

// queueMicrotask(() => {
//   console.log("QM before Promise");
// });

// Promise.resolve().then(() => {
//   console.log("this is promise");
// });

// queueMicrotask(() => {
//   console.log("QM after Promise");
// });

// console.log("2");

//? out of nextTick queue and promise queue, nextTick has more priority

//? promise and queueMicrotask have same priority, whichever comes first will be executed first

//! first all the synchronous code is executed
//? event loop will start from microtask(nextTick queue) queue, then promise queue.
//? in async code, nextTick has the highest priority

//~ ====================================================================================
// console.log("1");

// process.nextTick(() => {
//   console.log("this is NT 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is promise 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is promise 2");
// });

// process.nextTick(() => {
//   console.log("this is NT 2");
// });

// console.log("2");

//! first --> all sync code
//! second --> nextTick queue
//! third --> promise queue

//~ ====================================================================================
//~ ====================================================================================
// console.log("1");

// process.nextTick(() => {
//   console.log("this is NT 1");
//   process.nextTick(() => {
//     console.log("this is nested nt inside NT1");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("this is promise 1");
//   Promise.resolve().then(() => {
//     console.log("this is nested promise inside promise 1");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("this is promise 2");
// });

// process.nextTick(() => {
//   console.log("this is NT 2");
// });

// console.log("2");

//~ ====================================================================================
//~ ====================================================================================
// console.log("1");

// process.nextTick(() => {
//   console.log("this is NT 1");
//   process.nextTick(() => {
//     console.log("this is nested nt inside NT1");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("this is promise 1");
//   Promise.resolve().then(() => {
//     console.log("this is nested promise inside promise 1");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("this is promise 2");
//   process.nextTick(() => {
//     console.log("this is nested nt inside promise 2");
//   });
// });

// process.nextTick(() => {
//   console.log("this is NT 2");
//   Promise.resolve().then(() => {
//     console.log("this is nested promise inside nextTick 2");
//   });
// });

// console.log("2");

//! event-loop will execute the microtask operations in batches (i.e, all callbacks will be executed before moving to the next queue)

//~ ====================================================================================
// index.js
// process.nextTick(() => {
//   console.log("this is process.nextTick 1");
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick 3");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 3");
//   Promise.resolve().then(() =>
//     console.log("this is the inner promise inside Promise then block")
//   );
// });

//~ =====================================================================================

// process.nextTick(() => {
//   console.log("NT1");
// });

// Promise.resolve().then(() => {
//   console.log("p1");
// });

// Promise.resolve().then(() => {
//   console.log("p2");
//   process.nextTick(() => {
//     console.log("NT2");
//   });
// });

// Promise.resolve().then(() => {
//   console.log("p3");
//   Promise.resolve().then(() => {
//     console.log("p4");
//   });
// });

// process.nextTick(() => {
//   console.log("NT3");
// });

//! ==============================timer queue=============================================
//~ ================================  ================================================
//!
// setTimeout(() => {
//   console.log("st1");
// }, 4000);

// setTimeout(() => {
//   console.log("st2");
// }, 2000);

// process.nextTick(() => {
//   console.log("nt1");
// });

// Promise.resolve().then(() => {
//   console.log("p1");
// });

//~ ============================================================================================
// index.js
// setTimeout(() => {
//   console.log("this is setTimeout 1");
// }, 0);

// setTimeout(() => {
//   console.log("this is setTimeout 2");
// }, 0);

// setTimeout(() => {
//   console.log("this is setTimeout 3");
// }, 0);

// process.nextTick(() => {
//   console.log("this is process.nextTick 1");
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick 3");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 3");
// });

//~ ================================================================================================================
// index.js
// setTimeout(() => {
//   console.log("st1");
// }, 0);

// setTimeout(() => {
//   console.log("st2");
//   process.nextTick(() => console.log("nt1"));
// }, 0);

// setTimeout(() => {
//   console.log("st3");
// }, 0);

// process.nextTick(() => {
//   console.log("nt2");
// });

// process.nextTick(() => {
//   console.log("nt3");
//   process.nextTick(() => console.log("nt4"));
// });

// process.nextTick(() => {
//   console.log("nt5");
// });

// Promise.resolve().then(() => {
//   console.log("p1");
// });

// Promise.resolve().then(() => {
//   console.log("p2");
//   process.nextTick(() => console.log("nt6"));
// });

// Promise.resolve().then(() => {
//   console.log("p3");
// });

//& Callbacks in microtask queues are executed in between the execution of callbacks in the timer queue

//~ =======================================================================================
//~ ============================ io queue ===============================================
// index.js
// const fs = require("fs");
// import fs from "fs";

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

//~ =======================================================================================

// fs.readFile(import.meta.filename, () => {
//   console.log("this is readFile 1");
// });

// setTimeout(() => {
//   console.log("st1");
// }, 0);

//? delay is not 0 millisecond (the internal implementation of setTimeout() code takes the delay as MAX(input,1))
//! so the delay is never 0 ms, it is set to the minimum value i.e, 1 ms

//! io polling --> all callbacks related to io queue are not added in the queue directly, callbacks are added after io polling (if completed) then the callbacks

//! ========================================================================================

// setImmediate(() => {
//   console.log("set imm");
// }); // all callbacks related to setImmediate function, are added to check queue

//! ========================================================================================
//? setImmediate callbacks are added in the check queue

// index.js
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });

// setTimeout(() => {
//   console.log("this is setTimeout 1");
// }, 0);

// setImmediate(() => {
//   console.log("this is setImmediate 1");
// });

// for (let i = 0; i < 2000000000; i++) {} // 3ms

//! ============================== exception =====================
// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// setImmediate(() => {
//   console.log("immediate");
// });

//! in this --> op order cannot be determined

//! ==================================================================================
// index.js
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");

//   setImmediate(() => {
//     console.log("this is setImmediate 1");
//   });

//   process.nextTick(() =>
//     console.log("this is inner process.nextTick inside readFile")
//   );

//   Promise.resolve().then(() =>
//     console.log("this is inner Promise.resolve inside readFile")
//   );
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick 1");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });

// setTimeout(() => {
//   console.log("this is setTimeout 1");
// }, 2);

//! ======================================================================================
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() =>
//   console.log("this is inner process.nextTick inside readFile")
// );

// Promise.resolve().then(() =>
//   console.log("this is inner Promise.resolve inside readFile")
// );

// setTimeout(() => {
//   console.log("st");
// }, 1000);

// setImmediate(() => {
//   console.log("this is setImmediate 1");
// });

//! =============================== close queue ========================================
//! all callbacks related to closing events are added to close queue
