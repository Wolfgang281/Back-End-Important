//! events in nodeJS --> special way to handle asynchronous code (callback) (decoupling the code)
//! in nodeJS, event-emitter is a built class which is used to create custom events

import EventEmitter from "events";

let event = new EventEmitter();

//! to create an event --> emit("eventName", data1, data2,.....)
//! to listen to an event --> on("eventName", callback)
//? always declare on() before emit()

// event.on("hi", (payload) => {
//   console.log(payload);
//   console.log("hi event triggered");
// });

// event.on("hi", () => {
//   console.log("hi event triggered, listening 2nd time");
// });

// event.on("hi", () => {
//   console.log("hi event triggered, listening 3rd time");
// });

// event.on("hello", () => {
//   console.log("hello event triggered");
// });

// event.emit("hi", { name: "abc", age: 23 }); // created an event with the name as "hi"
// event.emit("hello"); // created an event with the name as "hello"

// console.log("hi");

// event.on("done", () => {
//   console.log("op done");
// });

event.once("done", () => {
  console.log("op done once");
});

event.emit("done");

event.emit("done");

event.emit("done");
