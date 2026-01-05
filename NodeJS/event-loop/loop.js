//! two queues --> microtask (nextTick, queueMicrotask) and macrotask (timer queue, I/O queue, check queue, close queue)

// console.log(process);

// process.nextTick(callback);

console.log("1");

process.nextTick(() => {
  console.log("this is NT 1");
});

queueMicrotask(() => {
  console.log("QM before Promise");
});

Promise.resolve().then(() => {
  console.log("this is promise");
});

queueMicrotask(() => {
  console.log("QM after Promise");
});

console.log("2");

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
