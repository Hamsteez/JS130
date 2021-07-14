function newStack() {
  let arr = [];
  return {
    push(val) {
      arr.push(val);
    },

    pop() {
     return arr.pop(); 
    },

    printStack() {
      for (let idx = 0; idx < array.length; idx++) {
        console.log(arr[idx]);
      }
    }
  }
}