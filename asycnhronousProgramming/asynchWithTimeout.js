// function delayLog() {
//   // let ctr = 1;
// //   while (ctr < 11) {
// //     setTimeout(() => console.log(ctr), (ctr * 1000));
// //     ctr++;
// //   }
//   for (let ctr = 1; ctr <= 10; ctr++) {
//     setTimeout(() => console.log(ctr), (ctr * 1000));
//   }
// }

// delayLog();

function afterNSeconds(callback, timeDelay) {
  setTimeout(callback, timeDelay * 1000);
}