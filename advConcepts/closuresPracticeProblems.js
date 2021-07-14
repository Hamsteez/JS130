// function makeMultipleLister(num) {
//   return function() {
//     while (num < 100) {
//       console.log(num);
//       num += 17;
//     }
//   }
// }

// let lister = makeMultipleLister(17);
// lister();

// let sum = 0;
// function add(num) {
//   sum += num;
//   console.log(sum);
// }

// function subtract(num) {
//   sum -= num;
//   console.log(sum);
// }


// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// function later(func, arg) {
//   return function() {
//     func(arg);
//   }
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(func, arg) {
//   return function(arg2) {
//     func(arg, arg2);
//   }
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

"use strict";
function bind(context, func) {
  return function() {
    func.call(context);
  }
}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }