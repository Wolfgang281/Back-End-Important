// //! events in nodeJS --> special way to handle asynchronous code (callback) (decoupling the code)
// //! in nodeJS, event-emitter is a built class which is used to create custom events

// import EventEmitter from "events";

// let event = new EventEmitter();

// //! to create an event --> emit("eventName", data1, data2,.....)
// //! to listen to an event --> on("eventName", callback)
// //? always declare on() before emit()

// event.on("mailEvent", () => {
//   console.log("mail sent");
// });

// event.on("otpEvent", (otp) => {
//   console.log("otp sent");
//   console.log(otp);
// });

// function registerUser() {
//   // code
//   //! mail
//   event.emit("mailEvent", "userData");
//   //! otp
//   event.emit("otp-Event", "46578");
//   console.log("user registered");
// }

// // registerUser();

// //! you have create your own event emitter class
// // let eventsObject = {
// //   mailEvent: [fn1, fn2],
// //   otpEvent: [],
// // };

// // class MyEventEmitter {
// //   eventsObject = {};

// //   addListener(eventName, cb) {
// //     this.eventsObject[eventName] = this.eventsObject[eventName] || [];
// //     this.eventsObject[eventName].push(cb);
// //   }
// // }

import Eventemitter from "events";

let event = new Eventemitter();

event.once("e1", () => {
  console.log("once event called");
});

event.on("someOtherEvent", () => {
  console.log("some other");
});

event.emit("e1");

event.on("error");

// https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
