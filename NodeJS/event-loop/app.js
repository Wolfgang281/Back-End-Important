console.log(1);
console.log(2);
console.log(3);
fs.readFileSync();
// for loop

// 1
// 2
// 3

//! does event-loop come into picture ? --> No, because there is no asynchronous code here.

//! some common api's (browser and node)
// setTimeout();
// setInterval();
// Promise;

//! only for NodeJS
// nextTick();
// setImmediate();
// queueMicrotask();

//? in browser, we have only two queues (micro(Promise, queueMicrotask) and macro(task queue --> DOM, events, setTimeout, setInterval, etc.))
//? out of which priority is given to microtask queue over macrotask queue

console.log(1);

Promise.resolve().then(() => console.log("promise"));

console.log(2);

fs.readFile("./app.js", (err, data) => {
  console.log("file read");
});

console.log(3);

// ! native IO events (windows IOCP, macOS kqueue, Linux epoll)

// asynchronous I/O operations (database call, file read/write, network calls) are handled by libuv in NodeJS
