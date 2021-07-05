function forEach(array, callback, contxt) {
  for (let idx = 0; idx < array.length; idx++) {
    callback.call(contxt, array[idx], idx, array);
  }
}

let arr = [1, 2, 3, 4];

// forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);


// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});