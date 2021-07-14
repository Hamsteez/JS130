// // function product(...numbers) {
// //   return numbers.reduce((total, number) => total * number);
// // }

// // let result = product(2, 3, 4, 5);

// function product() {
//   return [].reduce.call(arguments, (total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);


// // function product() {
// //   let args = Array.from(arguments);
// //   return args.reduce((total, number) => total * number);
// // }

// // let result = product(2, 3, 4, 5);
// console.log(result);


// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return { 
//     type: animalType, 
//     age, 
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// function q8(str1, str2, str3, str4, str5) {
//   return {
//     first: str1,
//     last: str5,
//     middle: [str2, str3, str4].sort(),
//   }
// }

// let arr = ['h', 'a', 'm', 'z', 'a'];


// console.log(q8(...arr));