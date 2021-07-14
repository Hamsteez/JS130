// function myBind(func, ctx) {
//   let partialArgs = [].slice.apply(arguments, [2])

//   return function() {
//     let remainingArgs = [].slice.apply(arguments);
//     let fullArgs = partialArgs.concat(remainingArgs);
//     return func.apply(ctx, fullArgs);
//   }
// }

function myBind(func, ctx, initialVal) {
  return function(finalVal) {
    return func.apply(ctx, [initialVal, finalVal]);
  }
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));