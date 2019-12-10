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
    22,
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
    21,
    20,
    65,
    8,
    6,
    32,
    44,
    14,
    55,
    2,
    1,
    4,
    65,
    84,
    74,
    5,
    2,
    1,
    5,
    6,
    3,
    5,
    86,
    2,
    5,
    9,
    6,
    1,
    85,
    6,
    2,
    4,
    8,
    9,
    2,
    14,
    7
  ])
);
