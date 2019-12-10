const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleWithSwap(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let k = 0; k < i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        swap(arr, k, k + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleWithSwap([9, 8, 7, 6, 5, 4, 3, 2, 1]));

function sortThisShit(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let k = 0; k < i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        var temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortThisShit([9, 8, 7, 6, 5, 4, 3, 2, 1]));

//opti
