function swapySwap(arr) {
  if (arr.length <= 1) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(
  swapySwap([
    100,
    2,
    14,
    85,
    96,
    74,
    888,
    9,
    5,
    1,
    45,
    32,
    21,
    5,
    6,
    999,
    -4,
    1,
    -4,
    20,
    21
  ])
);
