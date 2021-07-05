
function reduce(array, callback, startVal = null) {
  if (startVal === null) {
    startVal = array[0];
    for (let idx = 1; idx < array.length; idx++) {
      startVal = callback(startVal, array[idx]);
    }
  } else {
    for (let idx = 0; idx < array.length; idx++) {
      startVal = callback(startVal, array[idx]);
    }
  }
  return startVal;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]