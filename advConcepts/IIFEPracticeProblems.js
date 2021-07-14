// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// // sum += sum(numbers);  // ?
// console.log(sum);


// (function(num) {
//   while (num >= 0) {
//     console.log(num);
//     num--;
//   }
// })(7);

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// (function countdown(num, optArg = -1) {
//   if (optArg < num) {
//     optArg += 1;
//     countdown(num, optArg);
//     console.log(optArg);
//   }
  
// })(10);

// (function recursiveCounter(number) {
//   console.log(number);

//   if (number !== 0) {
//     recursiveCounter(number - 1);
//   }
// })(7);

