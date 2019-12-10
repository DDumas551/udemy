// loooooop
function addUp(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
// not a loooooop
function addUp2(n) {
  return (n * (n + 1)) / 2;
}

// nested looooop
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      for (let d = 0; d < n; d++) {
        console.log("i: " + i, "k: " + k, "d: " + d);
      }
    }
  }
}

// at least to x
function logAtLeastFive(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
// console.log("addUp:" + addUp(6));
// console.log("addUp2:" + addUp2(6));
// console.log(printAllPairs(3));
console.log(logAtLeastFive(1));
