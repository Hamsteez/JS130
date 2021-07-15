function startCounting() {
  let ctr = 1;
  let stopper = setInterval(() => {
    console.log(ctr);
    ctr++;
  }, 1000);
  return stopper;
}

function stopCounting(stopId) {
  return clearInterval(stopId);
}
