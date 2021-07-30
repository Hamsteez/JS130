// "use strict";

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }

// function plus(x) {
//   if (x === 7) throw new Error('nooo');
// }

// function hello(x) {
//   try {
//     plus(x);
//   } catch (error) {
//     console.log('error');
//   }
// }

// hello(7);

// To get 2:
let foo = 1;

function bar() {
  console.log(foo);
  if (foo === 1) {
    console.log('enter');
    var foo = 2;                // you can change this line
  } else if (foo === 2) {
    foo = 3;                    // you can change this line
  } else {
    foo = 4;                    // you can change this line
  }
}

bar();
// bar();
// bar();
// console.log(foo); // 1


// // To get 4:
// let foo = 1;

// function bar() {
//   if (foo === 1) {
//     foo = 2;                // you can change this line
//   } else if (foo === 2) {
//     foo = 3;                    // you can change this line
//   } else {
//     foo = 4;                    // you can change this line
//   }
// }

// bar();
// bar();
// bar();
// console.log(foo); // 4