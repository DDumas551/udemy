//Must be sorted

function search(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

// -------------------------------------

function divAndConq(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(
  divAndConq([1, 2, 3, 4, 5, 6, 7, 8, 12, 14, 55, 556, 7777, 8888888], 3)
);
