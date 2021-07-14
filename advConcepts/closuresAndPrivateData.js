// function makeCounterLogger(num1) {
//   return function(num2) {
//     let num = num1;
//     if (num > num2) {
//       while (num >= num2) {
//         console.log(num);
//         num--;
//       }
//     } else {
//       while (num2 >= num) {
//         console.log(num);
//         num++;
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

function makeList() {
  let arr = [];
  // return function(arg) {
  //   if (arg) {
  //     if (arr.includes(arg)) {
  //       arr.splice(arr.indexOf(arg), 1);
  //       console.log(`${arg} removed!`);
  //     } else {
  //       arr.push(arg);
  //       console.log(`${arg} added!`);
  //     }
  //   } else {
  //     if (arr.length === 0) {
  //       console.log(`The list is empty.`);
  //     }
  //     arr.forEach(item => console.log(item));
  //   }
  // }

// let list = makeList();
// list();
// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();

  return {
    add(arg) {
      arr.push(arg);
      console.log(`${arg} added!`);
    },

    remove(arg) {
      arr.splice(arr.indexOf(arg), 1);
      console.log(`${arg} removed!`);
    },

    list() {
      if (arr.length === 0) {
        console.log(`The list is empty.`);
      }
      arr.forEach(item => console.log(item));
    }
  }
}



let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
console.log(list.arr);
