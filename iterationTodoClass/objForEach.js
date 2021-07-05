
function objForEach(obj, callback) {
  let keys = Object.keys(obj);
  for (let idx = 0; idx < keys.length; idx++) {
    callback(keys[idx], obj[keys[idx]]);
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});

// the value of foo is 1
// the value of bar is 2
// the value of qux is 3